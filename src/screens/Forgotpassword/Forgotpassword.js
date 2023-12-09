import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const Forgotpassword = () => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm();

  const EMAIL_REGEX = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;

  const onContinuePressed = () => {
    navigation.navigate("Reset Confirmation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please enter your email</Text>
      <Input
        name="Enter Email"
        placeholder="Enter Email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
        }}
      />
      <Button
        text="Continue"
        type="PRIMARY"
        onPress={handleSubmit(onContinuePressed)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#010101",
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "300",
    color: "white",
  },
});

export default Forgotpassword;
