import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { FC, ReactNode } from "react";
import Colors from "../../constants/color";

const PrimaryButton: FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOutsideContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{
          color: Colors.primary600,
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOutsideContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    margin: 4,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
}
