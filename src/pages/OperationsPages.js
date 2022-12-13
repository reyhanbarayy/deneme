import React, {useState} from "react";
import { View, StyleSheet, Text  } from "react-native";
import Operations from "../components/Operations";
import { useSelector } from "react-redux";


const OperationsPages = () =>{
    const data= useSelector(state => state.OperationsReducer)
     {console.log(data)}
return(
    <View style={styles.container}>
        <Operations/>
    <Text>{data}buraya eklenecek</Text>
   
    </View>
)
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        }
    })
export default OperationsPages;

