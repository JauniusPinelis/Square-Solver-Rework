import React, { PureComponent, ReactNode } from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";

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
            </tr>
          </thead>
          <tbody>
            {this.state.points.map((point, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{point.x}</td>
                <td>{point.y}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PointsTable;
