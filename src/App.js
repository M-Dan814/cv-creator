import React, { Component } from "react";
import { General } from "./components/General";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Generated } from "./components/generatedCV";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      father: "",
      email: "",
      phone: "",
      address: "",
      company: "",
      position: "",
      tasks: "",
      expFrom: "",
      expTo: "",
      institution: "",
      study: "",
      eduFrom: "",
      eduTo: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeFather = this.handleChangeFather.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeInstitution = this.handleChangeInstitution.bind(this);
    this.handleChangeStudy = this.handleChangeStudy.bind(this);
    this.handleChangeEduFrom = this.handleChangeEduFrom.bind(this);
    this.handleChangeEduTo = this.handleChangeEduTo.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.handleChangeTasks = this.handleChangeTasks.bind(this);
    this.handleChangeExpFrom = this.handleChangeExpFrom.bind(this);
    this.handleChangeExpTo = this.handleChangeExpTo.bind(this);
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

  handleChangeInstitution(e) {
    this.setState({
      institution: e.target.value,
    });
  }

  handleChangeStudy(e) {
    this.setState({
      study: e.target.value,
    });
  }

  handleChangeEduFrom(e) {
    this.setState({
      eduFrom: e.target.value,
    });
  }

  handleChangeEduTo(e) {
    this.setState({
      eduTo: e.target.value,
    });
  }

  handleChangeCompany(e) {
    this.setState({
      company: e.target.value,
    });
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

  handleChangeExpFrom(e) {
    this.setState({
      expFrom: e.target.value,
    });
  }

  handleChangeExpTo(e) {
    this.setState({
      expTo: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="input-form">
          <General
            handleChangeName={this.handleChangeName}
            handleChangeAddress={this.handleChangeAddress}
            handleChangePhone={this.handleChangePhone}
            handleChangeFather={this.handleChangeFather}
            handleChangeEmail={this.handleChangeEmail}
          />
          <Education
            handleChangeEduFrom={this.handleChangeEduFrom}
            handleChangeEduTo={this.handleChangeEduTo}
            handleChangeStudy={this.handleChangeStudy}
            handleChangeInstitution={this.handleChangeInstitution}
          />
          <Experience
            handleChangeCompany={this.handleChangeCompany}
            handleChangePosition={this.handleChangePosition}
            handleChangeExpFrom={this.handleChangeExpFrom}
            handleChangeExpTo={this.handleChangeExpTo}
            handleChangeTasks={this.handleChangeTasks}
          />
        </div>
        <Generated
          name={this.state.name}
          father={this.state.father}
          address={this.state.address}
          phone={this.state.phone}
          email={this.state.email}
          institution={this.state.institution}
          study={this.state.study}
          eduFrom={this.state.eduFrom}
          eduTo={this.state.eduTo}
          company={this.state.company}
          position={this.state.position}
          tasks={this.state.tasks}
          expFrom={this.state.expFrom}
          expTo={this.state.expTo}
        />
      </div>
    );
  }
}
export default App;
