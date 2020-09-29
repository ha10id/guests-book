import React from "react";

const Item = (props) => {
  const { item } = props;

  const remove = async () => {
    props.remove(item);
  };

  return (
    <div className="col-sm">
    <div className="card fluid">
      <div className="item_text">
        <p>Гость: {item.user}</p>
        <p>{item.message}</p>
      </div>
      <div className="row fluid" style={{justifyContent:"flex-end"}}>
        <button
          type="button"
          className="secondary"
          onClick={remove}
        >
          Удалить
        </button>
      </div>
    </div>
    </div>
  );
};

export default Item;
