import React, { useState, useEffect } from "react";
import { API } from "../utils/api";
import Item from "./item";
import NewItem from "./newItem";
import { Paginator } from "./paginator";

const ItemList = () => {
  const [items, setItems] = useState({ data: [] });
  const [pages, setPages] = useState({ current: 1, total: 0, limit: 3 });
  const [records, setRecords] = useState(0);
  let item = {};
  const getItems = async () => {
    let request = `posts?page=${pages.current}`;

    API.get(request)
      .then((response) => {
        let json = response.data;
        setPages({
          ...pages,
          total: Math.ceil(parseFloat(json.total / pages.limit)),
        });
        setRecords(json.total);
        setItems({ data: json.posts });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  useEffect(() => {
    getItems();
  }, [pages.current, records]);

  const saveItem = async (it) => {
    item = it;
    console.log(item);

    await API.post("posts", item).then(resp => {
      console.log(resp);
      setPages({
        ...pages,
        current: Math.ceil(parseFloat(resp.data.total / pages.limit))
      });
      setRecords(resp.data.total);
    });
  };

  const removeItem = async (it) => {
    item = it;
    console.log(item);
    await API.delete(`posts/${item.id}`).then(resp => {
      console.log(resp);
      setPages({
        ...pages,
        current: Math.ceil(parseFloat(resp.data.total / pages.limit))
      });
      setRecords(resp.data.total);
    });
  };

  return (
    <div className="container fluid">
      <NewItem  save={saveItem}/>
      {items.data.map((item, idx) => (
        <div className="row">
        <Item key={idx} item={item} remove={removeItem}/>
        </div>
      ))}
      <Paginator
        pages={pages}
        setCurrentPage={(pn) => {
          if (pn > pages.total) pn = pages.total;
          setPages({ ...pages, current: pn });
        }}
        pageBack={() => {
          setPages({ ...pages, current: pages.current - 1 });
        }}
        pageForward={() => setPages({ ...pages, current: pages.current + 1 })}
      />
    </div>
  );
};

export default ItemList;
