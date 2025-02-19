import React, { useEffect, useState } from "react";
import { generateRandomBetween } from "../helper/generateRandomBetween";
import { Alert } from "react-native";
import GuessLogsItem from "../components/game/GuessLogsItem";
let minBoundary = 1;
let maxBoundary = 100;
const useGameScreen = (
  userNumber: number,
  onGameOver: (numberOfRounds: number) => void
) => {
  const initialState = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialState);
  const [guessRounds, setGuessRounds] = useState([initialState]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver, guessRounds]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const handleNextGuestNumber = (direction: "lower" | "higher") => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", "You know this is wrong...", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevState) => [newRndNumber, ...prevState]);
  };

  const guessRoundsLength = guessRounds?.length;
  return {
    handleNextGuestNumber,
    GuessLogsItem,
    guessRoundsLength,
    currentGuess,
    guessRounds,
  };
};

export default useGameScreen;
