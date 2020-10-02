import React, { Component } from "react";
import sendAsync from "../ipc-electron/ipc-rendere";

export default class App extends Component {
  componentDidMount() {
    sendAsync(1).then((result) => console.log("RESULT ", result));
  }

  render() {
    return <div>Selamat Datang Pekok</div>;
  }
}
