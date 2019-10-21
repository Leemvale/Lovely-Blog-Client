import React, { Component } from "react";
import Login from "containers/auth/login/Login";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello React!</h2>
        <Login/>
      </div>
    )
  }
}