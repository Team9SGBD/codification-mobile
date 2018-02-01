import React from "react";
import { Text, Image } from "react-native";
import style from "../../Style";

export default class Settings {
  static navigationOptions = {
    title: "Etat reservation",
    tabBarIcon: () => {
      return <Image source={require("./icons/eye.png")} style={style.icon} />;
    }
  };
  render() {
    return (
      <Text style={{ color: style.color, fontSize: 35 }}>Etat reservation</Text>
    );
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};
