import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector  } from "react-redux";
import OperationsActions from "../redux/action/OperationsActions";

const Operations = ({navigation}) => {
    const dispatch= useDispatch();
    navigation= useNavigation();
    
    return(
    <View >
        <TouchableOpacity  onPress={() => {dispatch(OperationsActions.Toplama) }} >
            <Text style={styles.buttonContainer} >Toplama İşlemi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Level', {operation: 'çıkarma'})}>
            <Text style={styles.buttonContainer} >Çıkarma İşlemi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Level', {operation: 'çarpma'})}>
            <Text style={styles.buttonContainer} >Çarpma İşlemi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Level', {operation: 'bölme'})}>
            <Text style={styles.buttonContainer} >Bölme İşlemi</Text>
        </TouchableOpacity>
        
    </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        width:200,
        fontSize:40,
        margin:15,
        borderRadius:50,
        backgroundColor:"#fbabff",
        textAlign:"center",
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})
export default Operations;