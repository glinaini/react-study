import React, { Component, Fragment } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.listItenClick = this.listItenClick.bind(this);
  }

  listItenClick() {
    const { deleteBtn, index } = this.props;
    deleteBtn(index);
  }

  render() {
    const { content } = this.props;
    return (
      <Fragment>
        <div style={{ display: "flex", width: "150px", paddingBottom: "10px" }}>
          <li style={{ flex: 1 }}>{content}</li>
          <button onClick={this.listItenClick}>删除</button>
        </div>
      </Fragment>
    );
  }
}

export default ListItem;
