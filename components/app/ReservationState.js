import React from "react";
import { Text, Image, View, ActivityIndicator, Button } from "react-native";
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
      reservation: null,
      errorCode: 200
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
      .get(`${baseURL}Accounts/${this.state.userId}/reservation`)
      .then(response => {
        this.setState({ reservation: response.data });
      })
      .catch(response => console.log(response.statusCode));
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

  annulerReservation() {
    console.log("annuler reservation");
  }

  confirmerReservation() {
    console.log("confirmer reservation");
  }

  render() {
    if (this.state.reservation !== null) {
      return (
        <View style={{ flex: 1, margin: 10, alignItems: "center" }}>
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
          <View
            style={{
              flex: 0.3,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button
              color="red"
              onPress={this.annulerReservation}
              title="Annuler"
              style={{ height: 10, width: 10 }}
            />
            <Button
              color="green"
              onPress={this.confirmerReservation}
              title="Confirmer"
            />
          </View>
        </View>
      );
    } else {
      if (this.state.errorCode !== 200)
        return (
          <Text style={[style.bold, { color: style.color }]}>
            Vous n'avez fait aucune réservation
          </Text>
        );
      else return <ActivityIndicator color={style.color} size="large" />;
    }
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};
