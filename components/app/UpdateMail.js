import React from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import style from "../../Style";

export default class UpdateMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMail: ""
    };
  }
  static navigationOptions = {
    title: "Modifier Mail",
    tabBarIcon: () => {
      return <Image source={require("./icons/settings.png")} />;
    }
  };

  setMail(mail) {
    this.setState({ newMail: mail });
  }

  /**
   * Method= updateMail()
   * Description= Permet de changer le mail
   */
  updateMail() {
    if (this.state.newMail.length > 0) console.log(this.state.newMail);
  }

  render() {
    return (
      <View style={style.view}>
        <Text style={{ color: style.color }}>Nouvelle adresse mail :</Text>
        <TextInput
          placeholder="Nouvelle adresse"
          onChangeText={newMail => this.setMail(newMail)}
          onSubmitEditing={() => this.updateMail()}
          keyboardType="email-address"
          value={this.state.newMail}
          style={style.textInput}
        />
        <Button
          style={{ marginTop: 10 }}
          title="Changer"
          onPress={() => this.updateMail()}
        />
      </View>
    );
  }
}
