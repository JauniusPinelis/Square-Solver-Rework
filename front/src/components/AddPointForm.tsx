import React, { PureComponent, ReactNode } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface Props {
  addPoint: Function;
}

interface State {
  x: Number;
  y: Number;
}

class AddPointForm extends PureComponent<Props, State> {
  state: State = {
    x: 0,
    y: 0
  };

  onChangeX = (e: any) =>
    this.setState({
      x: e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    });
  onChangeY = (e: any) =>
    this.setState({
      y: e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    });

  addPoint() {
    const point: State = {
      x: this.state.x,
      y: this.state.y
    };
    this.props.addPoint(point);
  }
  render(): ReactNode {
    return (
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>X</Form.Label>
          <Form.Control
            type="number"
            placeholder="X coordinate"
            onChange={this.onChangeX}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Y</Form.Label>
          <Form.Control
            type="number"
            placeholder="Y coordinate"
            onChange={this.onChangeY}
          />
        </Form.Group>
        <Button onClick={() => this.addPoint()}>Submit</Button>
      </Form>
    );
  }
}

export default AddPointForm;
