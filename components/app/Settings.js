import React from "react";
import { Text } from "react-native";
import style from "../../Style";

export default class Settings {
  static navigationOptions = {
    title: "Parametres",
    tabBarIcon: () => {
      return (
        <Image source={require("./icons/settings.png")} style={style.icon} />
      );
    }
  };
  render() {
    return <Text style={{ color: style.color, fontSize: 35 }}>Parametres</Text>;
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};
