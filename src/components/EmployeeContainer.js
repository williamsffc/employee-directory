import React, { Component } from "react";
import EmployeeForm from "./EmployeeForm";
import Employee from "./Employee";
import axios from "axios";

class EmployeeContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredEmployees: [],
    // arrayOfEmp: [results]
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10&nat=us").then((res) => {
      console.log(res.data.results);
      this.setState({ results: res.data.results });
    });
  }

  filterEmployee = id => {
    const employee = this.state.search.filter(employee => this.result.id = id);
    this.setState({ employee });
  }


  handleInputChange = (event) => {
    console.log(event.target);
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <EmployeeForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <Employee results={this.state.results} />
      </div>
    );
  }
}
export default EmployeeContainer;
