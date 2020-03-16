import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import PointsTable from "./components/PointsTable";
import AddPointForm from "./components/AddPointForm";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <PointsTable />
          </Col>
          <Col>
            <AddPointForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
