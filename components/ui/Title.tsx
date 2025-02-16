import { View, Text, StyleSheet } from "react-native";
import React, { FC, ReactNode } from "react";

const Title: FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    fontFamily: "open-sans-bold",
  },
});
interface TitleProps {
  children: ReactNode;
}
