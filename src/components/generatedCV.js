import React, { Component } from "react";

class Generated extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv">
        <div className="gen">
          <h1 className="heading">General Info</h1>
          <span>Name: {this.props.name}</span>
          <span>Father's Name: {this.props.father}</span>
          <span>Email: {this.props.email}</span>
          <span>Phone Number: {this.props.phone}</span>
          <span>Address: {this.props.address}</span>
        </div>
        <div className="edu">
          <h1 className="heading">Education</h1>
          <span>Institution: {this.props.institution}</span>
          <span>Study Title: {this.props.study}</span>
          <span>From: {this.props.eduFrom}</span>
          <span>To: {this.props.eduTo}</span>
        </div>
        <div className="exp">
          <h1>Experience</h1>
          <span>Company: {this.props.company}</span>
          <span>Position: {this.props.position}</span>
          <span>Tasks: {this.props.tasks}</span>
          <span>From: {this.props.expFrom}</span>
          <span>To: {this.props.expTo}</span>
        </div>
      </div>
    );
  }
}

export { Generated };
