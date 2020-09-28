import React from "react";

const Item = (props) => {
  const { item } = props;

  const remove = async () => {
    props.remove(item);
  };

  return (
    <div className="card">
      <div className="item_text">
        <p>{item.user}</p>
        <p>{item.message}</p>
      </div>
      <div className="actions">
        <button
          type="button"
          className="link-button"
          onClick={remove}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Item;
