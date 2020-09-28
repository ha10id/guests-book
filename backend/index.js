var _ = require("lodash");
const path = require('path');
const express = require("express");
const cors = require("cors");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

const port = 4000;
const app = express();
const adapter = new FileAsync("DB/db.json");

app.use(express.static('public'));
app.use(cors())

// for test backend only
// app.engine('.hbs', exphbs({
//   defaultLayout: 'main',
//   extname: '.hbs',
//   layoutsDir: path.join(__dirname, 'views/layouts')
// }))
// app.set('view engine', '.hbs')
// app.set('views', path.join(__dirname, 'views'))

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
    // GET / for test backend only
    // app.get("/", (request, response) => {
    //   let post = db
    //   .get("posts")
    //   .value();
    //   response.render("home", {
    //     post: post,
    //   });
    // });
    // GET /posts/
    app.get("/api/posts", (req, res) => {
      let posts;
      // get total records count
      let total = db.get('posts').size().value();
      // if request with page number
      if (!_.isEmpty(req.query)) {
        const { page } = req.query;
        const recPerPage = 3;
        if (page) {
          let pageInt = parseInt(page) === 0 ? 1 : parseInt(page);
          let startRec = pageInt === 1 ? 0 : (pageInt - 1) * recPerPage;
          if (pageInt) {
            posts = db
              .get("posts")
              .sortBy('id')
              .slice(startRec, startRec + recPerPage)
              .value();
          }
        }
      // else return all records
      } else {
        posts = db.get("posts").value();
      }
      res.send({"posts": posts, "total": total});
    });
    // GET /posts/:id
    app.get("/api/posts/:id", (req, res) => {
      const post = db.get("posts").find({ id: req.params.id }).value();
      res.send(post);
    });
    // POST /posts
    app.post("/api/posts", (req, res) => {
      db.get("posts")
        .push(req.body)
        .last()
        .assign({ id: Date.now().toString() })
        .write()
        .then((post) => res.send({"post": post, "total": db.get('posts').size().value()}));
    });
    // DELETE /posts/:id
    app.delete("/api/posts/:id", (req, res) => {
      db.get('posts')
        .remove({id: req.params.id})
        .write()
        .then(() => res.send({"total": db.get('posts').size().value()}));
    });

    // Set db default values
    return db.defaults({ posts: [] }).write();
  })
  .then(() => {
    app.listen(port, () => console.log("listening on port 4000"));
  });
