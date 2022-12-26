import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section" id="exp">
        <h1 className="heading">Education</h1>
        <label htmlFor="institution">Institution Name: </label>
        <input
          type="text"
          onChange={this.props.handleChangeInstitution}
          id="institution"
        />
        <label htmlFor="study">Name of Study/Course: </label>
        <input type="text" onChange={this.props.handleChangeStudy} id="study" />
        <label htmlFor="from">From: </label>
        <input type="date" onChange={this.props.handleChangeEduFrom} id="from" />
        <label htmlFor="to">To: </label>
        <input type="date" onChange={this.props.handleChangeEduTo} id="to" />
      </div>
    );
  }
}

export { Education };
