import React, { Component } from "react";
import axios from "axios";

interface IPointObject {
  x: number;
  y: number;
}

interface IState {
  points: IPointObject[];
}

export default class Test extends Component<any, IState> {
  state: IState = {
    points: []
  };
  componentDidMount() {
    axios.get(`/points`).then(res => {
      const points = res.data;
      this.setState({ points });
    });
  }
  render() {
    return (
      <ul>
        {this.state.points.map((point, i) => (
          <li key={i}>
            {point.x} {point.y}
          </li>
        ))}
      </ul>
    );
  }
}
