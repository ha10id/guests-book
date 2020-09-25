var _ = require("lodash");
const path = require('path');
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

const port = 3000;
const app = express();
const adapter = new FileAsync("DB/db.json");

app.use(express.static('public'));

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json());
app.use((err, request, response, next) => {
  // логирование ошибки, пока просто console.log
  console.log(err);
  response.status(500).send("Something broke!");
  next();
});

low(adapter)
  .then((db) => {
    // Routes
    // GET /
    app.get("/", (request, response) => {
      let post = db
      .get("posts")
      .value();
      response.render("home", {
        post: post,
      });
    });
    // GET /posts/
    app.get("/posts", (req, res) => {
      let post;
      if (!_.isEmpty(req.query)) {
        const { page } = req.query;
        const recPerPage = 3;
        if (page) {
          let pageInt = parseInt(page) === 0 ? 1 : parseInt(page);
          let startRec = pageInt === 1 ? 0 : (pageInt - 1) * recPerPage;
          if (pageInt) {
            // console.log(pageInt);
            post = db
              .get("posts")
              .slice(startRec, startRec + recPerPage)
              .value();
          }
        }
      } else {
        post = db.get("posts").value();
      }
      //console.log(JSON.stringify(post,null,'\t'));
      res.send(post);
    });
    // GET /posts/:id
    app.get("/posts/:id", (req, res) => {
      const post = db.get("posts").find({ id: req.params.id }).value();
      res.send(post);
    });
    // POST /posts
    app.post("/posts", (req, res) => {
      db.get("posts")
        .push(req.body)
        .last()
        .assign({ id: Date.now().toString() })
        .write()
        .then((post) => res.send(post));
    });
    // Set db default values
    return db.defaults({ posts: [] }).write();
  })
  .then(() => {
    app.listen(port, () => console.log("listening on port 3000"));
  });
