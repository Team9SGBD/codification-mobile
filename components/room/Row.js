import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import PropTypes from "prop-types";
import globalStyle from "../../Style";
import { StackNavigator } from "react-navigation";

export default class Row extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    room: PropTypes.object,
    index: PropTypes.number
  };

  /**
   * Method= room()
   * Description= Permet d'afficher les informations d'une chambre sur
   * une ligne
   */
  room() {
    return (
      <View style={style.view}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={[style.white, style.bold]}>
            Chambre {this.props.room.numchambre}
          </Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={style.white}>{this.props.room.nombatiment}</Text>
            <Text style={style.white}> - Etage {this.props.room.numetage}</Text>
          </View>
        </View>
        <Button
          onPress={() => this.props.codifier(this.props.room)}
          title="Codifier"
          color="green"
        />
      </View>
    );
  }

  render() {
    return this.room();
  }
}

const style = StyleSheet.create({
  white: {
    color: "white"
  },
  bold: {
    fontWeight: "bold"
  },

  view: {
    backgroundColor: globalStyle.color,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: globalStyle.color,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  firstTemp: {
    fontSize: 35
  },
  temp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22
  }
});
