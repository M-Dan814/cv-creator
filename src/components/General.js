import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      father: "",
      email: "",
      phone: "",
      address: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeFather = this.handleChangeFather.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value,
    });
    console.log(this.state);
  }

  handleChangeFather(e) {
    this.setState({
      father: e.target.value,
    });
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  handleChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  render() {
    const { name, father, email, phone, address } = this.state;
    return (
      <div className="section" id="gen">
        <h1 className="heading">General Info</h1>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          onChange={this.handleChangeName}
          id="name"
        />
        <label htmlFor="fname">Father's Name: </label>
        <input
          type="text"
          value={father}
          onChange={this.handleChangeFather}
          id="fname"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          value={email}
          onChange={this.handleChangeEmail}
          id="email"
        />
        <label htmlFor="phone">Name: </label>
        <input
          type="tel"
          value={phone}
          onChange={this.handleChangePhone}
          id="phone"
        />
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          value={address}
          onChange={this.handleChangeAddress}
          id="address"
        />
      </div>
    );
  }
}

export { General };
