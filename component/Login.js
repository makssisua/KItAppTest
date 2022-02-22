import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export const Login = () => {
  return (
    <>
      <View style={styles.loginPage}>
        <Text style={styles.title}>Авторизация</Text>
        <TextInput style={styles.input} placeholder={"Логин"} />
        <TextInput style={styles.input} placeholder={"Пароль"} />
        <View style={styles.button}>
          <Button title="LOG IN" color="#4169E1" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#4169E1",
    fontWeight: 800,
    marginBottom: 10
  },
  input: {
    alignText: "center",
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  button: {
    width: 150
  }
});
