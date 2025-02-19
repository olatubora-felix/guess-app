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
    <View style={ButtonStyles.buttonsContainer}>
      <View style={ButtonStyles.buttonContainer}>
        <PrimaryButton onPress={onPressLeft}>{leftText}</PrimaryButton>
      </View>
      <View style={ButtonStyles.buttonContainer}>
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

export const ButtonStyles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
