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
    return <Text style={[style.white, style.bold]}>{this.props.room.id}</Text>;
  }

  goToDetails() {
    console.log("codification success");
  }

  render() {
    return (
      <View style={style.view}>
        <View>
          <Text style={{ fontSize: 10 }}>{this.room()}</Text>
        </View>
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
