import React, { Component } from "react";

class General extends Component {

  render() {
    return (
      <fieldset className="section" id="gen">
        <h1 className="heading">General Info</h1>
        <label htmlFor="name">Name: </label>
        <input type="text" onChange={this.props.handleChangeName} id="name" />
        <label htmlFor="fname">Father's Name: </label>
        <input
          type="text"
          onChange={this.props.handleChangeFather}
          id="fname"
        />
        <input type="file" className="hidden" onChange={this.props.handleChangePhoto} id="image" />
        <label htmlFor="image">A Photo of Yourself</label>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          onChange={this.props.handleChangeEmail}
          id="email"
        />
        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" onChange={this.props.handleChangePhone} id="phone" />
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          onChange={this.props.handleChangeAddress}
          id="address"
        />
        <label htmlFor="des">Description: </label>
        <textarea onChange={this.props.handleChangeDescription} id="des" placeholder="A brief summary of yourself. Keep it short. About 3 to 4 lines is ideal." rows={7} cols="45"/>
      </fieldset>
    );
  }
}

export { General };
