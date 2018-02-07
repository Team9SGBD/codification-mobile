import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import style from "../../Style";
import SettingsList from "react-native-settings-list";
import { StackNavigator } from "react-navigation";

class Settings extends React.Component {
  constructor() {
    super();
  }
  static navigationOptions = {
    title: "Parametres",
    tabBarIcon: () => {
      return <Image source={require("./icons/settings.png")} />;
    }
  };

  updateMail() {
    console.log("Modif mail");
  }

  updatePwd() {
    console.log("Modif mdp");
  }

  logout() {
    console.log("Deconnexion");
  }

  render() {
    return (
      <View style={{ backgroundColor: "#f6f6f6", flex: 1 }}>
        <View style={{ backgroundColor: "#f6f6f6", flex: 1 }}>
          <SettingsList borderColor={style.color} defaultItemSize={50}>
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image
                    style={{ alignSelf: "center", height: 22, width: 22 }}
                    source={require("./icons/account.png")}
                  />
                </View>
              }
              hasNavArrow={false}
              itemWidth={70}
              titleStyle={{ color: "black", fontSize: 16 }}
              title="Modifier email"
              onPress={this.updateMail}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image
                    style={{ alignSelf: "center", height: 22, width: 22 }}
                    source={require("./icons/lock.png")}
                  />
                </View>
              }
              hasNavArrow={false}
              itemWidth={70}
              titleStyle={{ color: "black", fontSize: 16 }}
              title="Modifier mot de passe"
              onPress={this.updatePwd}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Image
                    style={{ alignSelf: "center", height: 4, width: 18 }}
                    source={require("./icons/exit.png")}
                  />
                </View>
              }
              title="Déconnexion"
              itemWidth={70}
              titleStyle={{ color: "black", fontSize: 16 }}
              hasNavArrow={false}
              onPress={this.logout}
            />
          </SettingsList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    marginLeft: 15,
    marginRight: 20,
    alignSelf: "center",
    width: 20,
    height: 24,
    justifyContent: "center"
  }
});

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};

export default StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions
  },
  Profile: {
    screen: Settings,
    navigationOptions
  }
});
