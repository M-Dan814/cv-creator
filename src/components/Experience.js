import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section" id="exp">
        <h1 className="heading">Experience</h1>
        <label htmlFor="company">Company Name: </label>
        <input
          type="text"
          onChange={this.props.handleChangeCompany}
          id="company"
        />
        <label htmlFor="position">Position: </label>
        <input
          type="text"
          onChange={this.props.handleChangePosition}
          id="position"
        />
        <label htmlFor="tasks">Main tasks: </label>
        <textarea
          type="textarea"
          rows={7}
          cols="45"
          placeholder="A brief description of the tasks you performed at this job..."
          onChange={this.props.handleChangeTasks}
          id="tasks"
        />
        <label htmlFor="from">From: </label>
        <input type="date" onChange={this.props.handleChangeExpFrom} id="from" />
        <label htmlFor="to">To: </label>
        <input type="date" onChange={this.props.handleChangeExpTo} id="to" />
      </div>
    );
  }
}

export { Experience };
