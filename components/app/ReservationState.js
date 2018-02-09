import React from "react";
import { Text, Image, View, ActivityIndicator } from "react-native";
import style from "../../Style";
import axios from "axios";
import moment from "moment";

const baseURL = "http://codificationcoud-esp.herokuapp.com/api/";
const exampleUser = {
  id: "5a7496cd184ba90014a66345"
};

export default class ReservationState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: exampleUser.id,
      reservation: null
    };
  }
  static navigationOptions = {
    title: "Etat reservation",
    tabBarIcon: () => {
      return <Image source={require("./icons/eye.png")} />;
    }
  };

  componentDidMount = () => {
    this.getReservation();
  };

  getReservation() {
    return axios
      .get(`${baseURL}Accounts/${exampleUser.id}/reservation`)
      .then(response => {
        this.setState({ reservation: response.data });
      })
      .catch(error => console.log(error));
  }

  confirmation() {
    return this.state.reservation.confirmation ? (
      <Text style={{ color: style.color, fontSize: 17, marginLeft: 5 }}>
        Oui
      </Text>
    ) : (
      <Text style={{ color: style.color, fontSize: 17, marginLeft: 5 }}>
        Non
      </Text>
    );
  }

  render() {
    if (this.state.reservation !== null) {
      return (
        <View style={[style.view, { marginVertical: 10 }]}>
          <Text style={[style.bold, { fontSize: 27, color: style.color }]}>
            Etat réservation :
          </Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[style.bold, { fontSize: 20, color: style.color }]}>
              Date réservation :
            </Text>
            <Text style={{ color: style.color, fontSize: 17, marginLeft: 5 }}>
              {moment(this.state.reservation.datereserv).format("DD/MM/YY")}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[style.bold, { fontSize: 20, color: style.color }]}>
              Numéro de lit :
            </Text>
            <Text style={{ color: style.color, fontSize: 17, marginLeft: 5 }}>
              {this.state.reservation.position}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={[style.bold, { fontSize: 20, color: style.color }]}>
              Réservation confirmée :
            </Text>

            {this.confirmation()}
          </View>
        </View>
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
