import React from "react";
import "./App.css";
import "mini.css";
import { ItemList } from "./components/";

function App() {
  return (
    <div className="App">
      <header>
        <h3>Гостевая книга</h3>
      </header>
      <ItemList />
      <footer>
        <p>© 40054-50001 Mars Weapons Inc.</p>
      </footer>
    </div>
  );
}

export default App;
