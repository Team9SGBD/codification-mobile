import React from "react";
import { Text, Image } from "react-native";
import style from "../../Style";

export default class SwitchRooms extends React.Component {
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

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};
