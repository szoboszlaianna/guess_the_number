import React from "react";
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from "react-native";
import BodyText from "../components/BodyText";
import colors from "../components/constants/colors";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The game is over!</TitleText>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/success.png")} resizeMode="cover" />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Number of rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text>
          </BodyText>
          <BodyText style={styles.resultText}>
            Number was: <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
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
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height * 30
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultContainer: {
    marginVertical: Dimensions.get("window").height * 60
  },
  resultText: {
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  }
});

export default GameOverScreen;
