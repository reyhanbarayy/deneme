import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Level = (navigation) => {
    navigation=useNavigation();
    return(
        <View >
           <TouchableOpacity onPress={() => {navigation.navigate('Game', {level:'1'})}}>
            <Text style={styles.text}>1.seviye</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {navigation.navigate('Game', {level:'2'})}}>
            <Text style={styles.text}>2.seviye</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {navigation.navigate('Game', {level:'3'})}}>
            <Text style={styles.text}>3.seviye</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        width:200,
        fontSize:40,
        margin:15,
        borderRadius:50,
        backgroundColor:"#DEC7F1",
        textAlign:"center",
    }

})

export default Level;