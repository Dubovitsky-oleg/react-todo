import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.parentDeleteCallback = props.deleteCallback;
    this.parentUpdateCallback = props.updateCallback;
  }

  handleDelete = e => {
    this.parentDeleteCallback(this.props.item.id);
  };

  toggleComplete(e) {
    // let newItem = {
    //     ...this.state.item, //копируем массив
    //     complete: !this.state.item.complete //изменяем complete на противоположное значение
    // };
    // this.setState({
    //     item: newItem
    // });
    let task = {
      ...this.props.item
    };
    // let task = {
    //     ...this.props.item
    // };
    task.complete = !task.complete;
    this.parentUpdateCallback(task);
  }

  render() {
    return (
      <div
        className={
          this.props.item.complete ? "task-text isComplete" : "task-text"
        }
      >
        <input
          type="checkbox"
          className="box"
          defaultChecked={this.props.item.complete}
          onClick={() => this.toggleComplete()}
        />
        {this.props.item.title}
        <span className="delete" onClick={() => this.handleDelete()}>
          x
        </span>
      </div>
    );
  }
}
