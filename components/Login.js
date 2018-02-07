import React from "react";
import { ScrollView, Text, TextInput, View, Button } from "react-native";
import style from "../Style";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }
  isValid() {
    let valid = true;
    const email = this.state.email;
    const password = this.state.password;
    console.log(email, password);

    var re = /\S+@\S+\.\S+/;
    if (email.length === 0 || password.length === 0) {
      valid = false;
      this.setState({ error: "Veuillez remplir tous les champs" });
    } else {
      if (!re.test(email)) {
        valid = false;
        this.setState({ error: "Adresse email incorrecte" });
      }
    }
    return valid;
  }
  connect() {
    if (this.isValid) console.log("validation connexion");
    else console.log("incorrect");
  }
  goToRegister() {
    console.log("page d'inscription");
  }
  showError() {
    if (this.state.error.length > 0)
      return (
        <Text style={{ color: "red", fontSize: 12 }}>{this.state.error}</Text>
      );
  }
  render() {
    return (
      <View style={style.view}>
        <Text style={{ fontSize: 27, color: style.color }}>Login</Text>
        <TextInput
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          style={style.textInput}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Mot de passe"
          onChangeText={password => this.setState({ password })}
          style={style.textInput}
          secureTextEntry={true}
        />
        {this.showError()}
        <View style={{ margin: 7 }}>
          <Button onPress={this.connect} title="Me connecter" />
        </View>
        <Button
          onPress={this.goToRegister}
          style={{ marginTop: 10 }}
          title="Inscription"
        />
      </View>
    );
  }
}
