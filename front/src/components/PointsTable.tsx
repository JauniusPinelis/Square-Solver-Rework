import React, { PureComponent, ReactNode } from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

interface PointObject {
  x: number;
  y: number;
}

interface State {
  points: PointObject[];
}

interface Props {}

class PointsTable extends PureComponent<Props, State> {
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
      <div>
        <h3>Points </h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>X</th>
              <th>Y</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.points.map((point, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{point.x}</td>
                <td>{point.y}</td>
                <td>
                  <Button
                    onClick={() => this.deletePoint(point)}
                    variant="warning"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PointsTable;
