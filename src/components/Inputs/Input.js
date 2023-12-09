import { View, TextInput, StyleSheet, Text } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const Input = ({ placeholder, rules = {}, control, name, secureTextEntry }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View style={styles.container}>
            <TextInput
              style={[styles.input, { borderColor: error ? "red" : "#00909E" }]}
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#00909E",
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Input;
