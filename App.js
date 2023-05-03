
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Regis from './src/screens/Register';
import Forgot from './src/screens/ForgotPassword';
import { NativeBaseProvider } from 'native-base';
import MyDrawer from './src/screens/Drawer';
import AppStack from './src/navigation/AppStack';


const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{
    headerStyle: {
      backgroundColor: '#6B0000', // Cambie el color a su preferencia
    },
  }}/>
          <Stack.Screen name="Regresar" component={MyDrawer} />
          <Stack.Screen name="Regiser" component={Regis} />
          <Stack.Screen name="forget" component={Forgot} />
        </Stack.Navigator>
      
      </NavigationContainer>
      </NativeBaseProvider>
      );
}






