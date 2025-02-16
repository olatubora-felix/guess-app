import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import PrimaryButton from "./PrimaryButton";

const ButtonsCard = ({
  rightText,
  leftText,
  onPressLeft,
  onPressRight,
}: ButtonsCardProps) => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onPressLeft}>{leftText}</PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onPressRight}>{rightText}</PrimaryButton>
      </View>
    </View>
  );
};

export default ButtonsCard;

interface ButtonsCardProps {
  rightText: ReactNode;
  leftText: ReactNode;
  onPressRight: () => void;
  onPressLeft: () => void;
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
