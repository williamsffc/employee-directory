import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function EmployeeList(props) {
  return (
    <div className="App">
      <ReactBootStrap.Table bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => (
            <tr>
              <td>
                <img
                  key={result.id.value}
                  alt=""
                  src={result.picture.thumbnail}
                  className="img-fluid"
                />
              </td>
              <td>
                {result.name.title}
                {". "}
                {result.name.first} {result.name.last}
              </td>
              <td>{result.phone}</td>
              <td>
                <a href="#top">
                  {result.email}
                </a>
              </td>
              <td>{result.dob.date}</td>
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}
export default EmployeeList;
