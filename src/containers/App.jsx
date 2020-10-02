import React, { Component } from "react";
import { GET_ALL_PRODUCT } from "../constants/ipc.constant";
import sendAsync from "../ipc-electron/ipc-rendere";

export default class App extends Component {
  componentDidMount() {
    sendAsync({ action: GET_ALL_PRODUCT, payload: null }).then((result) =>
      console.log("RESULT ", result)
    );
  }

  render() {
    return <div>Selamat Datang Pekok</div>;
  }
}
