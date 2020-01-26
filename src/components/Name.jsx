import React, { Component } from "react";

export default class Name extends Component {
  render() {
    return (
      <div>
        <h1 id="name">{this.props.chineseName}</h1>
      </div>
    );
  }
}
