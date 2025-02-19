import { View, StyleSheet, Dimensions } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../../constants/color";

const Card = ({ children }: CardProps) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

interface CardProps {
  children: ReactNode;
}
export default Card;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 24 : 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
