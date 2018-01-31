import React from "react";
import { Text } from "react-native";
import style from "../../Style";

export default class Settings {
  static navigationOptions = {
    title: "Echange de chambres",
    tabBarIcon: () => {
      return (
        <Image source={require("./icons/switch.png")} style={style.icon} />
      );
    }
  };
  render() {
    return (
      <Text style={{ color: style.color, fontSize: 35 }}>Echange chambre</Text>
    );
  }
}
