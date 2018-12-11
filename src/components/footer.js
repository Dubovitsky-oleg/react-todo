import React from "react";
import "./footer.css";

export default class Footer extends React.Component {

  handleChangeFilter = e => {
    this.props.ChangeFilter(e.currentTarget.dataset.value);
    console.log(e.currentTarget.dataset.value);
  };

  render() {
    return (
      // buttons
      <div>


        {this.props.items.some(todo => todo) ? (
          <div className="buttons">

            <span className="number-items">
              {this.props.items.filter(e => !e.complete).length} item left
      </span>

            <button
              type="button"
              className={
                this.props.filter === "all" ? "bt btn-color selected" : ""
              }
              data-value="all"
              onClick={this.handleChangeFilter}
            >
              All
        </button>

            <button
              type="button"
              className={
                this.props.filter === "active" ? "bt btn-color selected" : ""
              }
              data-value="active"
              onClick={this.handleChangeFilter}
            >
              Active
        </button>

            <button
              type="button"
              className={
                this.props.filter === "completed" ? "bt btn-color selected" : ""
              }
              data-value="completed"
              onClick={this.handleChangeFilter}
            >
              Completed
        </button>

            {this.props.items.some(todo => todo.complete) ? (
              <button
                type="button"
                className={
                  this.props.filter === "clear completed"
                    ? "bt btn-color selected"
                    : ""
                }
                onClick={this.props.clearCompleted}
                data-value="clear completed"

              >
                Clear completed
        </button>) : null}

          </div>) : null}
      </div>
    );
  }
}
