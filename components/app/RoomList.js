import React from "react";
import { Text, ListView, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import BuildingRow from "../room/Row";
import style from "../../Style";
import { StackNavigator } from "react-navigation";

const exampleUser = {
  id: "5a71c57b88b3320014267604"
};
const baseURL = "http://codificationesp.herokuapp.com/api/";

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: []
    };
    this.getBuildings();
  }

  static navigationOptions = {
    title: "Chambres disponibles",
    tabBarIcon: () => {
      return <Image source={require("./icons/home.png")} />;
    }
  };

  getBuildings() {
    return axios
      .get(`${baseURL}Accounts/${exampleUser.id}/batiments_Accesibles`)
      .then(response => {
        this.setState({ buildings: response.data });
      })
      .catch(error => error);
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    if (this.state.buildings.length > 0) {
      return (
        <ListView
          enableEmptySections={true}
          dataSource={ds.cloneWithRows(this.state.buildings)}
          renderRow={(row, k) => (
            <BuildingRow floor={row} index={parseInt(k, 10)} />
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
