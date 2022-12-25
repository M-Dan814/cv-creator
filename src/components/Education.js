import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      institution: "",
      study: "",
      from: "",
      to: "",
    };

    this.handleChangeInstitution = this.handleChangeInstitution.bind(this);
    this.handleChangeStudy = this.handleChangeStudy.bind(this);
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
  }

  handleChangeInstitution(e) {
    this.setState({
      institution: e.target.value,
    });
    console.log(this.state);
  }

  handleChangeStudy(e) {
    this.setState({
      study: e.target.value,
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
    const { institution, study, from, to } = this.state;
    return (
      <div className="section" id="exp">
        <h1 className="heading">Education</h1>
        <label htmlFor="institution">Institution Name: </label>
        <input
          type="text"
          value={institution}
          onChange={this.handleChangeInstitution}
          id="institution"
        />
        <label htmlFor="study">Name of Study/Course: </label>
        <input
          type="text"
          value={study}
          onChange={this.handleChangeStudy}
          id="study"
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

export { Education };
