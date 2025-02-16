import { View, Text, StyleSheet } from "react-native";
import React, { FC, ReactNode } from "react";
import Colors from "../../constants/color";

const InstructionText: FC<InstructionTextProps> = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;
const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
    fontFamily: "open-sans",
  },
});
interface InstructionTextProps {
  children: ReactNode;
  style?: Object;
}
