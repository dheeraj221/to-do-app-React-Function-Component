import React from "react";
import "./ListItems.css";

const ListItems = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.updateItem(e.target.value, item.key);
            }}
          />
          <button
            className="delete-item"
            onClick={() => {
              props.deleteItem(item.key);
            }}
          >
            Remove
          </button>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
};

export default ListItems;
