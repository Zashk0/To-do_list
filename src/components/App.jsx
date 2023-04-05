import React, { useState } from "react";

function App() {
  const [item, addHandle] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const currentItem = event.target.value;
    addHandle(currentItem);
  }
  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, item];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
