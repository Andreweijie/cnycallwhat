import React, { Component } from "react";

export default class Name extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100 }}>{this.props.chineseName}</h1>
      </div>
    );
  }
}
