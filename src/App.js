import React from "react";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Form } from "react-bootstrap";
import EmployeeContainer from "./components/EmployeeContainer";

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Jumbotron fluid className="jumbotron">
          <h1>Employee Directory</h1>
          <p>Search for any employee</p>
        </Jumbotron>
          <Form>
            <EmployeeContainer />
          </Form>
      </Container>
    );
  }
}

export default App;
