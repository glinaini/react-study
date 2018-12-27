import React, { Component, Fragment } from "react";
// import { Router, Route, hashHistory } from "react-router";
import ListItem from "./listItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
    this.addClickBtn = this.addClickBtn.bind(this);
    this.inputValueChange = this.inputValueChange.bind(this);
    this.deleteBtn = this.deleteBtn.bind(this);
  }

  addClickBtn() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  inputValueChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  deleteBtn(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list
    });
  }
  getTodoList() {
    return this.state.list.map((item, index) => {
      return (
        <ListItem
          deleteBtn={this.deleteBtn}
          key={index}
          content={item}
          index={index}
        />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <div>
            <input
              value={this.state.inputValue}
              onChange={this.inputValueChange}
            />
            <button onClick={this.addClickBtn}>添加</button>
          </div>
          <ul>{this.getTodoList()}</ul>
        </div>
      </Fragment>
    );
  }
}

export default TodoList;
