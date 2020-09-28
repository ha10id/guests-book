import React, { useState } from "react";

export const Paginator = (props) => {
  const [changePage, setChangePage] = useState(false);

  return (
    <div className="btn-container">
      <button
        className="button"
        disabled={props.pages.current === 1}
        onClick={props.pageBack}
      >
        <span>Назад</span>
      </button>
      <button
        title="кликните для ввода номера вручную"
        className="button"
        onClick={() => setChangePage(true)}
      >
        {changePage ? (
          <input
            autoFocus
            className="clean"
            title="Enter - перейти на страницу, Esc - отменить"
            type="text"
            size={5}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                props.setCurrentPage(parseInt(e.target.value));
                setChangePage(false);
              } else if (e.keyCode === 27) {
                setChangePage(false);
              } else if (e.keyCode < 48 || e.keyCode > 57) {
                e.preventDefault();
              }
            }}
          />
        ) : (
          <span>
            Страница {props.pages.current} из {props.pages.total}
          </span>
        )}
      </button>
      <button
        className="button"
        disabled={props.pages.current === props.pages.total}
        onClick={props.pageForward}
      >
        <span>Вперёд</span>
      </button>
    </div>
  );
};
