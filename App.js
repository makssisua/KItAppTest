import React from "react";
import { StyleSheet, View, SafeAreaView,Text } from "react-native";
// import { Login } from "./Component/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      {/*<Login />*/}
      <View>
        <Text>Hallo1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
});
