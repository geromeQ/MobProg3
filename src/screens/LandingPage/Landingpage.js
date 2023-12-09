import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../../assets/images/logo.png";

const LandingPage = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const onStartLoginPress = () => {
    navigation.navigate("Login"); // Navigate to your existing Login screen
  };

  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={Logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Iberia Institute</Text>
      <Button title="Start Login" onPress={onStartLoginPress} />
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
    marginBottom: 30,
  },
  logo: {
    width: "100%",
    maxWidth: 300,
    height: 100,
  },
});

export default LandingPage;
