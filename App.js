import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import OperationsPages from './src/pages/OperationsPages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LevelPages from './src/pages/LevelPages';
import GamePages from './src/pages/GamePages';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';



const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Operati'>
        <Stack.Screen
          name='Operations'
          options={{ title: 'İşlem Seçiniz' }}
          component={OperationsPages}>
        </Stack.Screen>
         <Stack.Screen
          name='Level'
          options={{ title: 'Seviye Seçiniz' }}
          component={LevelPages}>
        </Stack.Screen>
        <Stack.Screen
          name='Game'
          options={{ title: 'Çıkarma İşlemi' }}
          component={GamePages}>
        </Stack.Screen> 
      </Stack.Navigator>

    </NavigationContainer>
    </Provider>
  )
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: "pink",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  sembol: {
    textAlign: "left",
  }

});

export default App;