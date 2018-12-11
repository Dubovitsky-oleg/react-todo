import React from "react";
import shortid from "shortid";
import "./todoForm.css";
import TodoAdd from "./todoAdd";
import TodoItemList from "./todoItemsList";
import Footer from "./footer";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        {
          id: shortid.generate(),
          title: "Привет",
          complete: false,
          checked: false
        }
      ],
      filter: "all"
    };
  }

  // addTodo = todo => {
  //   console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  //   //here we are add and update todos
  //   this.setState({
  //     todos: [todo, ...this.state.todos]
  //   });
  // };

  addNewText = event => {
    //callBack функция которая передается другой компаненте
    // При нажатии на enter делаем новое состояние для text
    this.setState({
      text: [...this.state.text, event] //добавляет в массив объект с title это наш текст и со статусом complete
    });
  };

  // onChange = event => {
  //   this.setState = {
  //     [event.target.name]: event.target.value
  //   };
  // };

  onSubmit = e => {
    e.preventDefault();
    // alert("Новое сообщение: ", this.state.text);
  };

  //Родитель отдает свою callBack функцию, а ребенок только принимает и реагирует в виде события

  deleteItem = item => {
    this.setState({
      text: this.state.text.filter(t => {
        return t.id !== item;
      })
    });
  };

  updateItem = item => {
    const newItemsList = [...this.state.text];
    // console.log(newItemsList.indexOf(item));
    newItemsList.forEach(a => {
      if (a.id === item.id) {
        a.complete = item.complete;
        return;
      }
    });

    this.setState({
      item: newItemsList
    });
  };

  handleChangeFilter = value => {
    this.setState({
      filter: value
    });
  };

  clearCompleted = () => {
    this.setState({
      text: this.state.text.filter(t => !t.complete)
    });
  };

  allComplete = () => {
    this.setState({
      text: this.state.text.map(text => ({
        ...text,
        complete: !this.state.toggleAllComplete // value = false
      })),
      toggleAllComplete: !this.state.toggleAllComplete
    });
  };

  render() {
    let filterItems = [];
    if (this.state.filter === "all") filterItems = this.state.text;
    if (this.state.filter === "active")
      filterItems = this.state.text.filter(t => !t.complete);
    if (this.state.filter === "completed")
      filterItems = this.state.text.filter(t => t.complete);
    return (
      <form onSubmit={this.onSubmit}>
        <TodoAdd
          addNewText={this.addNewText}
          allComplete={this.allComplete}
          items={this.state.text}
        />
        <TodoItemList
          item={filterItems}
          onDelete={this.deleteItem}
          onUpdate={this.updateItem}
        />
        <Footer
          items={this.state.text}
          filter={this.state.filter}
          ChangeFilter={this.handleChangeFilter}
          clearCompleted={this.clearCompleted}
        />
      </form>
    );
  }
}
