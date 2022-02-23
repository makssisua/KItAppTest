import React from "react";
import { StyleSheet,  View, Text } from "react-native";

export const Header = ({ handleLogOut, currentUser }) => {
  return (
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
  );
}

const styles = StyleSheet.create({
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
