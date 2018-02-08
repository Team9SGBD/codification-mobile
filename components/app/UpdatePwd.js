import React from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import style from "../../Style";

export default class UpdatePwd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      confirmPassword: ""
    };
  }
  static navigationOptions = {
    title: "Modifier mot de passe",
    tabBarIcon: () => {
      return <Image source={require("./icons/settings.png")} />;
    }
  };

  setPassword(newPassword) {
    this.setState({
      newPassword: newPassword
    });
  }

  setConfirmPassword(confirmPassword) {
    this.setState({
      confirmPassword: confirmPassword
    });
  }

  updatePassword() {
    console.log(this.state.newPassword);
  }

  render() {
    return (
      <View style={style.view}>
        <Text style={{ color: style.color }}>Nouveau mot de passe :</Text>
        <TextInput
          placeholder="Nouveau mot de passe"
          onChangeText={newPassword => this.setPassword(newPassword)}
          secureTextEntry={true}
          value={this.state.newPassword}
          style={style.textInput}
        />
        <TextInput
          placeholder="Nouvelle adresse"
          onChangeText={confirmPassword =>
            this.setConfirmPassword(confirmPassword)
          }
          onSubmitEditing={() => this.updatePassword()}
          secureTextEntry={true}
          value={this.state.confirmPassword}
          style={style.textInput}
        />
        <Button
          style={{ marginTop: 10 }}
          title="Changer"
          onPress={() => this.updatePassword()}
        />
      </View>
    );
  }
}
