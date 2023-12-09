import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ type, onPress, text }) => {
  return (
    <Pressable
      style={[styles.container, styles[`container_${type}`]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },

  container_PRIMARY: {
    backgroundColor: "#959DCE",
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },

  container_TERTIARY: {
    marginVertical: 5,
  },

  text_PRIMARY: {
    fontWeight: "bold",
    color: "#DAE1E7",
  },

  text_TERTIARY: {
    color: "white",
  },
});

export default Button;
