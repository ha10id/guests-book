import React, {useState} from "react";

const NewItem = (props) => {
  let [item, setItem] = useState({ user: "", message: "" });

  const save = async () => {
    props.save(item);
    setItem({ user: "", message: "" });
  };

  return (
    <div className="card">
      <label for="user">Ваше имя:</label>
      <input  id="user"
              type="text"
              value={item.user}
              onChange={e => setItem({ ...item, user: e.target.value })}
              />
      <label for="message">Сообщение:</label>
      <textarea   id="message"
                  className="textarea"
                  type="text"
                  rows="7"
                  placeholder="Введите текст"
                  value={item.message}
                  onChange={e => setItem({ ...item, message: e.target.value })}
                />
      <div className="btn-container">
        <button className="button" onClick={save}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default NewItem;
