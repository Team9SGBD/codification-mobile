import React from "react";
import {} from "react-native";
import Home from "./components/Home";
import Login from "./components/Login";
import Global from "./components/app/Global";
import MainService from "./app/services/MainService";

export default class App extends React.Component {
  state = {
    loaded: false
  };
  constructor() {
    super();
    MainService.load(v => this.setState({ loaded: true }));
  }

  render() {
    return this.state.loaded ? <Login /> : <Home />;
  }
}
