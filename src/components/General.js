import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section" id="gen">
        <h1 className="heading">General Info</h1>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          onChange={this.props.handleChangeName}
          id="name"
        />
        <label htmlFor="fname">Father's Name: </label>
        <input
          type="text"
          onChange={this.props.handleChangeFather}
          id="fname"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          onChange={this.props.handleChangeEmail}
          id="email"
        />
        <label htmlFor="phone">Name: </label>
        <input
          type="tel"
          onChange={this.props.handleChangePhone}
          id="phone"
        />
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          onChange={this.props.handleChangeAddress}
          id="address"
        />
      </div>
    );
  }
}

export { General };
