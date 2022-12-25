import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      position: "",
      tasks: "",
      from: "",
      to: "",
    };

    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.handleChangeTasks = this.handleChangeTasks.bind(this);
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
  }

  handleChangeCompany(e) {
    this.setState({
      company: e.target.value,
    });
    console.log(this.state);
  }

  handleChangePosition(e) {
    this.setState({
      position: e.target.value,
    });
  }

  handleChangeTasks(e) {
    this.setState({
      tasks: e.target.value,
    });
  }

  handleChangeFrom(e) {
    this.setState({
      from: e.target.value,
    });
  }

  handleChangeTo(e) {
    this.setState({
      to: e.target.value,
    });
  }

  render() {
    const { company, position, tasks, from, to } = this.state;
    return (
      <div className="section" id="exp">
        <h1 className="heading">Experience</h1>
        <label htmlFor="company">Company Name: </label>
        <input
          type="text"
          value={company}
          onChange={this.handleChangeCompany}
          id="company"
        />
        <label htmlFor="position">Name of Study/Course: </label>
        <input
          type="text"
          value={position}
          onChange={this.handleChangePosition}
          id="position"
        />
        <label htmlFor="tasks">Main tasks: </label>
        <input
          type="textarea"
          value={tasks}
          onChange={this.handleChangeTasks}
          id="tasks"
        />
        <label htmlFor="from">From: </label>
        <input
          type="date"
          value={from}
          onChange={this.handleChangeFrom}
          id="from"
        />
        <label htmlFor="to">To: </label>
        <input type="date" value={to} onChange={this.handleChangeTo} id="to" />
      </div>
    );
  }
}

export { Experience };
