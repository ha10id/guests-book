import React, { useState } from "react";

const NewItem = (props) => {
  let [item, setItem] = useState({ user: "", message: "" });

  const save = async () => {
    props.save(item);
    setItem({ user: "", message: "" });
  };

  return (
    <div className="col-sm">
      <div className="card fluid">
        <div class="input-group vertical">
          <label for="user">Ваше имя:</label>
          <input
            type="text"
            id="user"
            placeholder="Username"
            value={item.user}
            onChange={(e) => setItem({ ...item, user: e.target.value })}
          />
        </div>
        <div class="input-group vertical">
          <label for="user">Сообщение:</label>
          <textarea
            id="message"
            className="textarea"
            type="text"
            rows="7"
            placeholder="Введите текст"
            value={item.message}
            onChange={(e) => setItem({ ...item, message: e.target.value })}
          />
        </div>

        <div className="row col-sm" style={{justifyContent: "center"}}>
          <button className="button primary" onClick={save}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
