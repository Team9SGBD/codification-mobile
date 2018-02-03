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
      buildings: [],
      rooms: []
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
      .get(`${baseURL}Accounts/${exampleUser.id}/chambres_Accessibles`)
      .then(response => {
        this.setState({ buildings: response.data.batiments });
      })
      .catch(error => error);
  }

  getRooms() {
    let rooms = [];
    let room = {
      num: 0,
      building: "",
      floor: 0,
      maxBeds: 0,
      occupiedBeds: 0
    };

    this.getBuildings.then(() => {
      if (this.state.buildings.length > 0) {
        this.state.buildings.forEach(building => {
          room.building = building.nombatiment;
          console.log(room.building);

          if (typeof building.etages !== undefined) {
            console.log("Waa molneu");
            building.etages.forEach(etage => {
              room.etage = etage.numero;
              if (typeof etage.chambres !== undefined) {
                if (etage.chambres.length > 0) {
                  etage.chambres.forEach(chambre => {
                    room.num = chambre.numchambre;
                    room.maxBeds = chambre.nbremaxoccupants;
                    if (typeof chambre.reservations !== undefined)
                      room.occupiedBeds = chambre.reservations.length;

                    this.setState({ rooms: rooms.push(room) });
                  });
                }
              }
            });
          }
        });
      }
    });

    this.setState({ rooms: rooms });
  }

  componentDidMount = () => {
    this.getRooms();
  };

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    if (this.state.buildings.length > 0) {
      return (
        <ListView
          enableEmptySections={true}
          dataSource={ds.cloneWithRows(this.state.buildings)}
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
