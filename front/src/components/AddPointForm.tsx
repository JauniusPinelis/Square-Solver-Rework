import React, { PureComponent, ReactNode } from "react";

import Form from "react-bootstrap/Form";

interface Props {}
interface State {}

class AddPointForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): ReactNode {
    return (
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>X</Form.Label>
          <Form.Control type="text" placeholder="X coordinate" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Y</Form.Label>
          <Form.Control type="text" placeholder="Y coordinate" />
        </Form.Group>
      </Form>
    );
  }
}

export default AddPointForm;
