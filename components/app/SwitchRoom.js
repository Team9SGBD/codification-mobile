import React from "react";
import { Text, Image, View } from "react-native";
import style from "../../Style";

export default class SwitchRooms extends React.Component {
  static navigationOptions = {
    title: "Echange de chambres",
    tabBarIcon: () => {
      return <Image source={require("./icons/switch.png")} />;
    }
  };
  render() {
    return (
      <View style={style.view}>
        <Image
          source={require("./images/coming-soon.png")}
          style={style.comingSoon}
        />
      </View>
    );
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};
