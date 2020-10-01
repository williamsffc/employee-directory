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

  handleFilter = (filteredEmployees) => {
    if (filteredEmployees !== "") {
      this.setState(() => ({
        options: this.state.options.filter((option) =>
          option.toLowerCase().includes(filteredEmployees.toLowerCase())
        ),
      }));
    }
  };

  handleInputChange = (event) => {
    // const {name, value} = event.target;
    console.log(event.target);

    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.componentDidMount(this.state.search);
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
