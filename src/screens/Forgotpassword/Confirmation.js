import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";

const Confirmation = () => {
  const navigation = useNavigation();

  const onBackToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your password has been reset sucessfully</Text>
      <Text style={styles.text}>Now Login with your new password</Text>
      <Button text="Log In" type="PRIMARY" onPress={onBackToLogin} />
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
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  text: {
    marginVertical: 10,
    color: "#010101",
  },
});

export default Confirmation;
