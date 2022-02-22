import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, Alert} from "react-native";

export const Login = ({ handleLogIn } ) => {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleSubmit = () => {
    if (inputLogin === "user" && inputPassword === "123") {
      handleLogIn()
    } else {
      Alert.alert(
        "Внимание",
        "Введен неверный логин или пароль",)
      setInputLogin('')
      setInputPassword('')
    }
  }

  return (
    <>
      <View style={styles.loginPage}>
        <Text style={styles.title}>Авторизация</Text>
        <TextInput
          value={inputLogin}
          onChangeText={newLogin => setInputLogin(newLogin)}
          style={styles.input}
          placeholder={"Логин"}
        />
        <TextInput
          value={inputPassword}
          secureTextEntry={true}
          onChangeText={newPassword => setInputPassword(newPassword)}
          style={styles.input}
          placeholder={"Пароль"}
        />
        <View style={styles.button}>
          <Button
            onPress={handleSubmit}
            title="ВОЙТИ"
            color="#4169E1"
          />
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
    fontWeight: "bold",
    marginBottom: 10
  },
  input: {
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
