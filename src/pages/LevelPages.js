import * as React from 'react';
import { View, StyleSheet, Text } from "react-native";
import Level from "../components/Level";

const LevelPages = ({route}) =>{
    
    return(
        <View style={styles.container}>
            <Level/>
            <Text>{route.params.operation}</Text>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }

})

export default LevelPages;