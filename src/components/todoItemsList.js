import React from "react";
import TodoItem from "./todoItem";

export default class TodoItemList extends React.Component {
  render() {
    return (
      <div className="task">
        {this.props.item.map(item => {
          return (
            <TodoItem
              item={item}
              updateCallback={this.props.onUpdate}
              deleteCallback={this.props.onDelete}
              key={item.id}
            />
          );
        })}
      </div>
    );
  }
}
