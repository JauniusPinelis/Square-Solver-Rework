import React, { PureComponent, ReactNode } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface Props {
  addPoint: Function;
}

interface State {
  x?: Number;
  y?: Number;
}

class AddPointForm extends PureComponent<Props, State> {
  state: State = {};

  onChangeX = (event: any) => this.setState({ x: event.target.value });
  onChangeY = (event: any) => this.setState({ y: event.target.value });

  addPoint() {
    const point = {
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
            type="text"
            placeholder="X coordinate"
            onChange={this.onChangeX}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Y</Form.Label>
          <Form.Control
            type="text"
            placeholder="Y coordinate"
            onChange={this.onChangeY}
          />
        </Form.Group>
        <Button variant="primary" onClick={() => this.addPoint()}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddPointForm;
