import React from "react";
import RoomList from "./RoomList";
import Settings from "./Settings";
import SwitchRoom from "./SwitchRoom";
import ReservationState from "./ReservationState";
import { StatusBar, View, AsyncStorage } from "react-native";
import { TabNavigator } from "react-navigation";
import style from "../../Style";

//Appel de toutes les pages
const Tabs = TabNavigator(
  {
    RoomList: { screen: RoomList },
    ReservationState: { screen: ReservationState },
    SwitchRoom: { screen: SwitchRoom },
    Settings: { screen: Settings }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: style.color,
        borderTopWidth: 1,
        borderTopColor: "#0071ff"
      },
      indicatorStyle: {
        backgroundColor: "white",
        height: 2
      }
    }
  }
);

//Chargement de la barre de navigation
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}
