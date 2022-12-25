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
}

export { General };
