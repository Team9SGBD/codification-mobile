import React from "react";
import { ScrollView, Text, TextInput, View, Button } from "react-native";
import style from "../Style";

export default class Login extends React.Component {
  connect() {
    console.log("validation connexion");
  }
  goToRegister() {
    console.log("page d'inscription");
  }
  render() {
    return (
      <View style={style.view}>
        <View style={style.loginBox}>
          <Text style={{ fontSize: 27, color: "white" }}>Login</Text>
          <TextInput placeholder="Email" style={style.textInput} />
          <TextInput placeholder="Mot de passe" style={style.textInput} />
          <View style={{ margin: 7 }}>
            <Button onPress={this.connect} title="Me connecter" />
          </View>
        </View>
        <Button
          onPress={this.goToRegister}
          title="Inscription"
          color={style.color}
          style={{ marginTop: 10 }}
        />
      </View>
    );
  }
}
