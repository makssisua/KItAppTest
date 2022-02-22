import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {hotels} from './Api/hotelApi'
import { useState } from "react";
import { Rooms } from "./Rooms";

export const Hotels = ({currentUser}) => {
  const [currentHotel, setCurrentHotel] = useState(null);

  if (currentHotel !== null) {
    return (
      <Rooms
        currentHotel={currentHotel}
        setCurrentHotel={setCurrentHotel}
        currentUser={currentUser}
      />
    )
  }

  return(
    <View style={styles.hotelPage}>
      <Text style={styles.title}>Лучшие отели!</Text>
      <View>
        <FlatList
          data={hotels}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {setCurrentHotel(item)}}>
              <View style={styles.item}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  hotelPage: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: '5%',
    paddingBottom: '10%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "#4169E1",
    fontWeight: "bold",
    marginBottom: 10
  },
  item: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4169E1",
    padding: 5,
    marginBottom: 10,
  },
  itemName: {
    color: "#4169E1",
    fontWeight:'bold',
    borderBottomWidth: 2,
    borderBottomColor: "#4169E1",
  },
});
