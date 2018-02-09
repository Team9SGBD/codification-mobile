import React from "react";
import {
  Text,
  ListView,
  Image,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import axios from "axios";
import BuildingRow from "../room/Row";
import style from "../../Style";
import { StackNavigator } from "react-navigation";

const baseURL = "http://codificationcoud-esp.herokuapp.com/api/";

const exampleUser = {
  id: "5a7496cd184ba90014a66345"
};

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      userID: exampleUser.id,
      reservedRoom: null,
      isReservationConfirmed: false
    };
    try {
      AsyncStorage.setItem("userID", exampleUser.id);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount = () => {
    try {
      AsyncStorage.getItem("userID").then(value =>
        this.setState({ userID: value })
      );
      console.log(this.state.userID);
    } catch (error) {
      console.log(error);
    }
    if (this.state.userID !== "") this.getRooms();
  };

  static navigationOptions = {
    title: "Chambres disponibles",
    tabBarIcon: () => {
      return <Image source={require("./icons/home.png")} />;
    }
  };

  getRooms() {
    return axios
      .get(`${baseURL}Accounts/${this.state.userID}/chambres_Accessibles`)
      .then(response => {
        this.setState({ rooms: response.data });
      })
      .catch(error => console.log(error));
  }

  codifier(room) {
    return axios
      .post(`${baseURL}Accounts/${exampleUser.id}/reservation`, {
        chambreId: room.idchambre
      })
      .then(() => console.log("reservation success"))
      .catch(error => console.log(error));
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
            <BuildingRow
              codifier={this.codifier}
              room={row}
              index={parseInt(k, 10)}
            />
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
