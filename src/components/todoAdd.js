import React from "react";
import shortid from "shortid";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "./todoAdd.css";

export default class TodoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.parentUpdateAllCheck = this.props.allComplete;
    this.notificationDOMRef = React.createRef();
  }

  addNewText = event => {
    if (event.key === "Enter") {
      // При нажатии на enter делаем новое состояние для text
      const newItem = {
        //добавляет в массив объект с title это наш текст и со статусом complete
        id: shortid.generate(),
        title: event.currentTarget.value.trim().replace(/^\s|[.`":'$@~;]/g, ""),
        complete: false
      };
      if(!newItem.title){
        return false;
      }
      console.log(newItem.title);
      this.props.addNewText(newItem);
      event.currentTarget.value = ""; //очищаем поле инпут после enter
    }
  };


  buttonAdd = event => {
       
    // onChange = (event) =>{
    //   event.preventDefault();
      
    // }
      // При нажатии на enter делаем новое состояние для text
      const newItem = {
        //добавляет в массив объект с title это наш текст и со статусом complete
        id: shortid.generate(),
        title: event.currentTarget.value.trim().replace(/^\s|[.`":'$@~;]/g, ""),
        complete: false
      };
      if(!newItem.title){
        return false;
      }
    }

  

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.setState({
      text: (event.target.value = "")
    });
  }

  updateCheck = e => {
    this.parentUpdateAllCheck(this.props.text.complete);
  };

  addNotification = () => {
    this.notificationDOMRef.current.addNotification({
      title: "Awesomeness",
      message: "New todo item",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  };

  render() {
    return (
      <div className="input-group">
        <div className="input-group-text">
          <input
            onChange={this.props.text}
            onClick={this.props.allComplete}
            defaultChecked={() => this.updateCheck()}
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
        </div>
        <input
          type="text"
          // onKeyDown = {this.addNotification}
          className="form-control"
          placeholder="What needs to be done?"
          onKeyPress={this.addNewText}
          // value={this.state.value}
          // onChange={this.handleChange}
          aria-describedby="basic-addon2"
        />
        <ReactNotification ref={this.notificationDOMRef} />
        {/* <div className="input-group-append">
          <button
            // onClick={this}
            className="btn btn-outline-secondary"
            type="button"
            onClick={this.buttonAdd}
          >
            Add
          </button>
        </div> */}
      </div>
    );
  }
}
