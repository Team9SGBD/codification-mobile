import React from "react";
import { View, Text, Image } from "react-native";
import style from "../Style";

export default class Home extends React.Component {
  render() {
    return (
      <View style={style.mainView}>
        <Text style={style.homeText}>CODIFICATION</Text>
        <Image source={require("../icons/logo.png")} style={style.icon} />
        <Text style={[style.homeText, style.bold]}>ESP</Text>
      </View>
    );
  }
}
