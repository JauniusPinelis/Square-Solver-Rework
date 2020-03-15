import React, { Component } from "react";
import axios from "axios";

export default class Test extends Component {
  state = {
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
