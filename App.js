
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Regis from './src/screens/Register';
import { NativeBaseProvider } from 'native-base';
import MyDrawer from './src/screens/Drawer';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Regresar" component={MyDrawer} />
          <Stack.Screen name="Regiser" component={Regis} />
        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
      );
}






