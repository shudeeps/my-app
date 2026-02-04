import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "react",
    };
  }
  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event)=>{


alert(`${this.state.topic}`)
event.preventDefault()

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
          <br></br>

          <label>comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
      <br></br>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
