import { Alert, Button, StyleSheet, Text, View } from "react-native";

export const Order = ({currentRoom, setCurrentRoom, currentUser}) => {
  const handelOrder = () => {
    if (currentRoom.available === false) {
      Alert.alert(
          `${currentUser.name} ${currentUser.surname}`,
        `К сожалению номер ${currentRoom.id} уже занят`
    )
      return null
    }
    if (currentUser.money >= currentRoom.price) {
      Alert.alert(
        `${currentUser.name} ${currentUser.surname}`,
        `Спасибо за бронирование!
        Ваш номер: ${currentRoom.id}
        Стоимость: ${currentRoom.price}$
        `
      )} else {
      Alert.alert(
        `${currentUser.name} ${currentUser.surname}`,
        `К сожалению на вашем балансе не достаточно средств`
      )
      }
    }

  return(
    <View style={styles.orderPage}>
      <View style={styles.prevPageButton}>
        <Button
          onPress={() => setCurrentRoom(null)}
          title="Назад"
          color="#4169E1"
        />
      </View>
      <Text style={styles.title}>Бронирование</Text>
      <View style={styles.item}>
        <Text style={styles.title}>Номер: {currentRoom.id} </Text>
        <Text style={styles.title}>{currentRoom.name} - {currentRoom.price}$</Text>
        <Text>
          {currentRoom.available
            ? <Text style={{color: "green"}}>Свободен</Text>
            : <Text style={{color: "red"}}>Занят</Text>
          }
        </Text>
        <View style={styles.orderButton}>
          <Button
            title="БРОНИРОВАТЬ"
            color="#4169E1"
            onPress={handelOrder}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  orderPage: {
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
    width: 200,
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
  orderButton: {
    paddingTop: 10,
    alignSelf: "center",
    width: 120,
    height: 50,
    marginBottom: 20,
  },
});
