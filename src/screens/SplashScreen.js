import React, { Component } from "react";
import { Image, View, ImageBackground, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace("Start"));
    }, 3000);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/image/Background.png")}
        style={styles.background}
      >
        <View style={styles.container}>
          <Image source={require("../assets/image/OSOMLOGO.png")} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
