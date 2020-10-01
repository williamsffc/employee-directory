import React from "react";
import { Button } from "react-bootstrap";

function EmployeeForm(props) {
  return (
    <div className="search-box">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        type="text"
        placeholder="Employee Name"
        name="search"
        id="search"
      />
      <Button variant="info" onClick={props.handleFormSubmit}>
        Search
      </Button>
    </div>
  );
}

export default EmployeeForm;
