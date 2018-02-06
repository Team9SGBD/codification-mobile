import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";
import globalStyle from "../../Style";
import { StackNavigator } from "react-navigation";

export default class Row extends React.Component {
  static propTypes = {
    room: PropTypes.object,
    index: PropTypes.number
  };

  room() {
    return (
      <View>
        <Text style={[style.white, style.bold]}>
          Chambre {this.props.room.numchambre}
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={style.white}>{this.props.room.nombatiment}</Text>
          <Text style={style.white}> - Etage {this.props.room.numetage}</Text>
        </View>
      </View>
    );
  }

  goToDetails() {
    console.log("codification success");
  }

  render() {
    return (
      <View style={style.view}>
        {this.room()}
        <Button onPress={this.goToDetails} title="Codifier" color="green" />
      </View>
    );
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
