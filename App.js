import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Header } from "./component/Header";
import { Login } from "./component/Login";
import { Hotels } from "./component/Hotels"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserToken, setCurrentUserToken] = useState('noToken')

  useEffect(() => {
    getData()
  }, [])

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('userToken', value)
    } catch (e) {
      console.log(e)
    }
  }

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
        <Header currentUser={currentUser } handleLogOut={handleLogOut}/>
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
});
