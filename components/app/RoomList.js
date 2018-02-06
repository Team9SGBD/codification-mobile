import React from "react";
import { Text, ListView, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import BuildingRow from "../room/Row";
import style from "../../Style";
import { StackNavigator } from "react-navigation";

const exampleUser = {
  id: "5a7496cd184ba90014a66345"
};
const baseURL = "http://codificationcoud-esp.herokuapp.com/api/";

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
    this.getRooms();
  }

  static navigationOptions = {
    title: "Chambres disponibles",
    tabBarIcon: () => {
      return <Image source={require("./icons/home.png")} />;
    }
  };

  getRooms() {
    return axios
      .get(`${baseURL}Accounts/${exampleUser.id}/chambres_Accessibles`)
      .then(response => {
        this.setState({ rooms: response.data });
      })
      .catch(error => error);
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    if (this.state.rooms.length > 0) {
      return (
        <ListView
          enableEmptySections={true}
          dataSource={ds.cloneWithRows(this.state.rooms)}
          renderRow={(row, j, k) => (
            <BuildingRow room={row} index={parseInt(k, 10)} />
          )}
        />
      );
    } else {
      return <ActivityIndicator color={style.color} size="large" />;
    }
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};

export default StackNavigator({
  RoomList: {
    screen: RoomList,
    navigationOptions
  },
  Confirm: {
    screen: RoomList,
    navigationOptions
  }
});
