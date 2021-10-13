import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import colors from "../components/constants/colors";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} resizeMode="cover" />
      </View>
      <View style={styles.resultContainer}>
        <BodyText>
          Number of rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text>
        </BodyText>
        <BodyText>
          Number was: <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultContainer: {
    marginVertical: 15
  }
});

export default GameOverScreen;
