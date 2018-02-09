import React from "react";
import { ScrollView, Text, TextInput, View, Button } from "react-native";
import style from "../Style";
import ValidationComponent from "react-native-form-validator";

export default class Login extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  _onSubmit() {
    const validation = {
      email: { email: true, required: true },
      password: { minlength: 8, required: true }
    };

    this.validate(validation);
    if (this.isFormValid()) {
      console.log("all good");
    }
  }

  setEmail(email) {
    this.setState({ email: email });
  }

  setPassword(password) {
    this.setState({ password: password });
  }

  goToRegister() {
    console.log("page d'inscription");
  }

  render() {
    return (
      <View style={style.view}>
        <Text style={{ fontSize: 27, color: style.color }}>Login</Text>
        <TextInput
          ref="email"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          style={style.textInput}
          keyboardType="email-address"
        />
        <TextInput
          ref="password"
          placeholder="Mot de passe"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          style={style.textInput}
          secureTextEntry={true}
        />
        <Text style={{ color: "red", fontSize: 12 }}>
          {this.getErrorMessages()}
        </Text>
        <View style={{ margin: 7 }}>
          <Button onPress={this._onSubmit} title="Me connecter" />
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
