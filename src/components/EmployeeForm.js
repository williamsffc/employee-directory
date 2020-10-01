import React from "react";

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
    </div>
  );
}

export default EmployeeForm;
