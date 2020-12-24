import React, { Component } from "react";
import "./App.css";
import ListItems from "./ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  deleteAllItem = (e) => {
    e.preventDefault();
    this.setState({
      items: [],
    });
  };

  updateItem = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      return item;
    });
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div className="App">
        <form id="to-do-form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter task"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          ></input>
          <button type="submit" disabled={!this.state.currentItem.text}>
            Add
          </button>
          <button onClick={this.deleteAllItem}>Remove All</button>
        </form>
        <p>{this.state.items.text}</p>

        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
        />
      </div>
    );
  }
}

export default App;
