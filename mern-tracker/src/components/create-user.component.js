import React, { Component } from "react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    // Bindings
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      username: "",
    };
  }

  // methods
  onChangeUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    // keep the user on the page to add more users
    // but set the state to empty to clear the input
    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              required
              value={this.state.username}
              onChange={this.onChangeUserName}
              placeholder="e.g. Johnsmt"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Create User"
            />
          </div>
        </form>
      </div>
    );
  }
}
