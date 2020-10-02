import React, { Component } from "react";
import { GET_ALL_PRODUCT, GET_ALL_USER } from "../constants/ipc.constant";
import sendAsync, {
  handleGetAllUser,
  handleGetAllProduct,
} from "../ipc-electron/ipc-rendere";

export default class App extends Component {
  state = {
    users: [],
    products: [],
  };
  componentDidMount() {
    console.log(handleGetAllUser());
    console.log(handleGetAllProduct());
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <span>Selamat Datang Pekok Aku ingi selalu bersama kamu</span>
        <div>
          {users.map((data, index) => {
            return <span key={index}>{data.username}</span>;
          })}
        </div>
      </div>
    );
  }
}
