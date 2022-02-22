import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Login } from "./component/Login";
import { Hotels } from "./component/Hotels"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserToken, setCurrentUserToken] = useState('noToken')

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    try {
      AsyncStorage.getItem('userToken').then(value =>{
        if(value !== null) {
          setCurrentUserToken(value)
        }
      })
    } catch(e) {
      console.log(e)
    }
  }

  const handleLogIn = () => {
    setCurrentUser({
      name: 'Иван ',
      surname: 'Люленов',
      money: 200,
    })
    setCurrentUserToken('abc123abc')
    storeData(currentUserToken)
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('userToken', value)
    } catch (e) {
      console.log(e)
    }
  }

  const handleLogOut = async () => {
    setCurrentUserToken('noToken')
    try {
      await AsyncStorage.removeItem('userToken')
    } catch (e) {
      console.log(e)
    }
  }

  if (currentUserToken !== 'noToken') {
   return (
      <SafeAreaView style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.headerName}>KitApp</Text>
          <Text style={styles.headerName}>Баланс: {currentUser?.money}</Text>
          <Text
            style={styles.headerName}
            onPress={handleLogOut}
          >
            Выйти
          </Text>
        </View>
        <Hotels currentUser={currentUser}/>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.app}>
        <Login handleLogIn={handleLogIn}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#4169E1",
    alignItems: 'flex-end',
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerName: {
    color: "white",
  },
});
