import React, { PureComponent, ReactNode } from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

interface PointObject {
  x: number;
  y: number;
}

interface Props {
  deletePoint: Function;
  points: PointObject[];
}

class PointsTable extends PureComponent<Props> {
  deletePoint(point: PointObject, i: Number) {
    this.props.deletePoint(point, i);
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
            {this.props.points.map((point, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{point.x}</td>
                <td>{point.y}</td>
                <td>
                  <Button
                    onClick={() => this.deletePoint(point, i)}
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
