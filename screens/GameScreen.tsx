import { View, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsCard, { ButtonStyles } from "../components/ui/ButtonsCard";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import GuessLogsItem from "../components/game/GuessLogsItem";
import useGameScreen from "../hooks/useGameScreen";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const {
    currentGuess,
    guessRounds,
    handleNextGuestNumber,
    guessRoundsLength,
  } = useGameScreen(userNumber, onGameOver);
  const { width, height } = useWindowDimensions();
  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higer or Lower
        </InstructionText>
        <ButtonsCard
          leftText={<FontAwesome6 name="minus" size={24} Colors="white" />}
          onPressLeft={() => handleNextGuestNumber("lower")}
          rightText={<FontAwesome5 name="plus" size={24} Colors="white" />}
          onPressRight={() => handleNextGuestNumber("higher")}
        />
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerWide}>
          <View style={ButtonStyles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuestNumber("lower")}>
              <FontAwesome6 name="minus" size={24} Colors="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={ButtonStyles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuestNumber("higher")}>
              <FontAwesome5 name="plus" size={24} Colors="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogsItem
              roundNumber={guessRoundsLength - index}
              guess={item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
interface GameScreenProps {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void;
}
