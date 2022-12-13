import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather"



const GamePages = ({route}) => {
  const [islem, setIslem] = useState();
  const ilksayi = Math.floor(Math.random() * 10);
  console.log("ilk sayi:" + ilksayi);
  const ikincisayi = Math.floor(Math.random() * ilksayi);
  console.log("ikinci sayi:" + ikincisayi)
  const sonuc = ilksayi - ikincisayi
  console.log("kullanıcı sonucu:" + islem)
  return (
    <View style={styles.container}>
      <Text style={styles.random_number}>{ilksayi}</Text>
      <Text style={styles.random_number}>{ikincisayi}</Text>
      <View style={styles.cizgi}>
        <Icon name="plus" size={50} />
        <Icon name="minus" size={50} />
        <Icon name="x" size={50} />
        <Icon name="divide" size={50} />
      </View>
      <TextInput style={styles.text_ınput} 
      placeholder="?" 
      keyboardType='numeric' 
      onChangeText={(val) =>setIslem(val)}></TextInput>
       <Text>{route.params.level}</Text>
       <Text>{route.params.level}h</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4e6ff"

  },
  random_number: {
    fontSize: 80,
    textAlign: "center",
    color: "#41334d",

  },
  text_ınput: {
    color: "#41334d",
    fontSize: 80,
    borderBottomWidth: 2,
    width: 80,
    textAlign: "center",


  },
  cizgi: {
    borderBottomWidth: 3,
    width: 150,
    borderBottomColor: "#41334d",
    flexDirection: "row",
  },
})

export default GamePages;