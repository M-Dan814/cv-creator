import React, { Component } from "react";

class Generated extends Component {

  render() {
    return (
      <div className="cv" id="hidden">
        <div className="gen">
          <img
            alt="No file received"
            src={this.props.image}
            height="200"
            width="200"
          />
          <span>Name: {this.props.name}</span>
          <span>Father's Name: {this.props.father}</span>
          <span>Email: {this.props.email}</span>
          <span>Phone Number: {this.props.phone}</span>
          <span>Address: {this.props.address}</span>
          <span>Description: {this.props.description}</span>
        </div>
        <div className="edu">
          <h1 className="heading">Education</h1>
          <span>Institution: {this.props.institution}</span>
          <span>Study Title: {this.props.study}</span>
          <span>From: {this.props.eduFrom}</span>
          <span>To: {this.props.eduTo}</span>
        </div>
        <div className="exp">
          <h1 className="heading">Experience</h1>
          <span>Company: {this.props.company}</span>
          <span>Position: {this.props.position}</span>
          <span>Tasks: {this.props.tasks}</span>
          <span>From: {this.props.expFrom}</span>
          <span>To: {this.props.expTo}</span>
        </div>
        <button
          onClick={() => {
            var actContents = document.body.innerHTML;
            document.body.innerHTML = actContents;
            window.print();
          }}
        >
          Print CV
        </button>
        <button onClick={this.props.edit}>Edit CV</button>
      </div>
    );
  }
}

export { Generated };
