import React from "react";
import { Text, ListView, Image } from "react-native";
import axios from "axios";
import BuildingRow from "../room/Row";
import style from "../../Style";

const exampleUser = {
  id: "5a71c57b88b3320014267604"
};
const baseURL = "http://codificationesp.herokuapp.com/api/";

export default class RoomList extends React.Component {
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
      return <Image source={require("./icons/home.png")} style={style.icon} />;
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
    return (
      <ListView
        enableEmptySections={true}
        dataSource={ds.cloneWithRows(this.state.buildings)}
        renderRow={(row, k) => (
          <BuildingRow floor={row} index={parseInt(k, 10)} />
        )}
      />
    );
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};
