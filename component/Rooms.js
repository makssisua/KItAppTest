import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Order } from "./Order";

export const Rooms = ({currentHotel, setCurrentHotel, currentUser}) => {
  const [currentRoom, setCurrentRoom] = useState(null);

  if (currentRoom !== null) {
    return (
      <Order
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
        currentUser={currentUser}
      />
    )
  }

  return(
      <View style={styles.hotelPage}>
        <View style={styles.prevPageButton}>
          <Button
            onPress={() => setCurrentHotel(null)}
            title="Назад"
            color="#4169E1"
          />
        </View>
        <Text style={styles.title}>Отель {currentHotel.name}</Text>
        <FlatList
          data={currentHotel.rooms}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setCurrentRoom(item)}>
              <View style={styles.item}>
                <Text style={styles.itemName}>Номер: {item.id}</Text>
                <Text style={styles.itemName}>{item.name} - {item.price}$</Text>
                <Text>
                  {item.available
                    ? <Text style={{color: "green"}}>Свободен</Text>
                    : <Text style={{color: "red"}}>Занят</Text>
                  }
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
  );
}


const styles = StyleSheet.create({
  hotelPage: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: '10%',
    paddingBottom: '10%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: "#4169E1",
    fontWeight: "bold",
    marginBottom: 10
  },
  item: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4169E1",
    padding: 20,
    marginBottom: 10,
  },
  itemName: {
    color: "#4169E1",
    fontWeight:'bold',
    borderBottomWidth: 2,
    borderBottomColor: "#4169E1",
  },
  prevPageButton: {
    alignSelf: "flex-start",
    width: 70,
    height: 40,
    marginBottom: 20,
  },
});
