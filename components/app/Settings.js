import React from "react";
import { Text, Image } from "react-native";
import style from "../../Style";

export default class Settings extends React.Component {
  static navigationOptions = {
    title: "Parametres",
    tabBarIcon: () => {
      return <Image source={require("./icons/settings.png")} />;
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
