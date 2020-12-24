import React, { useState } from "react";
import "./App.css";
import ListItems from "./ListItems";

function App() {
  const initialValue = {
    items: [],
    currentItem: {
      text: "",
    },
  };

  const [state, setValue] = useState(initialValue);

  const handleInput = (e) => {
    setValue({
      ...state,
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    const items = [...state.items, state.currentItem];
    setValue({
      items: items,
      currentItem: {
        text: "",
        key: "",
      },
    });
  };

  const deleteItem = (key) => {
    const filteredItems = state.items.filter((item) => item.key !== key);
    setValue({ ...state, items: filteredItems });
  };

  const deleteAllItem = (e) => {
    e.preventDefault();
    setValue({ ...state, items: [] });
  };

  const updateItem = (text, key) => {
    const items = state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      return item;
    });
    setValue({
      ...state,
      items: items,
    });
  };

  return (
    <div className="App">
      <form id="to-do-form" onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter task"
          value={state.currentItem.text}
          onChange={handleInput}
        ></input>
        <button type="submit" disabled={!state.currentItem.text}>
          Add
        </button>
        <button onClick={deleteAllItem}>Remove All</button>
      </form>

      <ListItems
        items={state.items}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </div>
  );
}

export default App;
