import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { FC, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsCard from "../components/ui/ButtonsCard";
import Colors from "../constants/color";

interface StartGameScreenProps {
  onPickedNumber: (value: number) => void;
}
const StartGameScreen: FC<StartGameScreenProps> = ({ onPickedNumber }) => {
  const { width, height } = useWindowDimensions();
  const [enteredText, setEnteredText] = useState("");
  const handleOnChangeText = (enteredValue: string) => {
    setEnteredText(enteredValue);
  };

  const handleResetInput = () => {
    setEnteredText("");
  };
  const handleSubmit = () => {
    const choosenNumber = Number(enteredText);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: handleResetInput,
          },
        ]
      );
    }
    onPickedNumber(choosenNumber);
  };

  const marginTop = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View
          style={[
            styles.rootContainer,
            {
              marginTop,
            },
          ]}
        >
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredText}
              onChangeText={handleOnChangeText}
            />
            <ButtonsCard
              leftText="Reset"
              onPressLeft={handleResetInput}
              rightText="Confirm"
              onPressRight={handleSubmit}
            />
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },

  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
