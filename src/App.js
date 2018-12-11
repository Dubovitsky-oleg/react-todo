import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/todoForm";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <Header />
            <TodoForm onSubmit={this.onSubmit} />
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default App;
