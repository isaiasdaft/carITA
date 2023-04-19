
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import { NativeBaseProvider } from 'native-base';
import MyDrawer from './src/screens/Drawer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Drawer" component={MyDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
      );
}






