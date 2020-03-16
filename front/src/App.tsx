import React, { Component, ReactNode } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import PointsTable from "./components/PointsTable";
import AddPointForm from "./components/AddPointForm";

import axios from "axios";

interface PointObject {
  x: number;
  y: number;
}

interface State {
  points: PointObject[];
}

class App extends Component {
  state: State = {
    points: []
  };
  componentDidMount() {
    axios.get(`/points`).then(res => {
      const points = res.data;
      this.setState({ points });
    });
  }
  deletePoint(point: PointObject) {
    axios.delete(`/points/`, { data: { x: point.x, y: point.y } }).then(res => {
      const points = this.state.points.splice(1, 1);
      this.setState({ points });
    });
  }
  render(): ReactNode {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <PointsTable
                points={this.state.points}
                deletePoint={this.deletePoint}
              />
            </Col>
            <Col>
              <AddPointForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
