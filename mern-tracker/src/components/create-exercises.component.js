import React, { Component } from "react";

// import datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercises extends Component {
  // add exercise to the database
  constructor(props) {
    super(props);

    // refer the this.state.exercise to the exercise object
    // binding this to each exercise object
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.state = {
      // we need prprieties with the fileds of the exercise in mongodb
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  // hand code the exercise object
  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "test user",
    });
  }

  // methods to update (set the state) when the user changes something
  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  onChangeDuration = (event) => {
    this.setState({ duration: event.target.value });
  };

  // get the date from the calendar to pass as a prop to the component
  onChangeDate = (date) => {
    this.setState({ date: date });
  };

  // when the submit button is clicked

  onSubmit = (event) => {
    //prevent the default html behavior to take place
    event.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);

    // return to the home page
    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        {/* call on this submit method */}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            {/* choose from a dropdown menu */}
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {
                // we have a js code here that gets from mongodb all the users
                // and map to return for each one of them a option
                this.state.users.map((user) => {
                  return (
                    <option
                      // it is a must
                      key={user}
                      value={user}
                    >
                      {user}
                    </option>
                  );
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              required
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Create Exercise Log"
            />
          </div>
        </form>
      </div>
    );
  }
}
