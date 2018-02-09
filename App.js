import React from "react";
import { AsyncStorage } from "react-native";
import Home from "./components/Home";
import Login from "./components/Login";
import Global from "./components/app/Global";
import MainService from "./app/services/MainService";

var connectedUser = null;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      connectedUser: null
    };
    MainService.load(v => this.setState({ loaded: true }));
    AsyncStorage.getItem("userID").then(value => (connectedUser = value));
    console.log(connectedUser);
  }

  /**
   * Method= connect()
   * Description= Permet de sauvegarder la session de l'utilisateur et de
   *          recharger la page
   */
  connect() {
    connectedUser = "5a7496cd184ba90014a66345";
    try {
      AsyncStorage.setItem("userID", "5a7496cd184ba90014a66345");
    } catch (error) {
      console.log(error);
    }
    this.forceUpdate;
  }

  /**
   * Si l'utilisateur est connecté, on charge la navigation globale
   * Sinon, on charge la page de connexion
   */
  render() {
    if (connectedUser === null)
      return this.state.loaded ? (
        <Login connectUser={this.connect} />
      ) : (
        <Home />
      );
    else return this.state.loaded ? <Global /> : <Home />;
  }
}
