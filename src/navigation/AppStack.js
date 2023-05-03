import React from 'react'

// React navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens names
import screen from '../utils/screenNames';

// Screens imports
import Main from '../screens/Main'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={screen.main}
      screenOptions={{headerShown: false}}
    >
        <Stack.Screen 
            name={screen.main} 
            component={Main} 
        />

        <Stack.Screen 
            name={screen.screenOption1} 
            component={Settings} 
        />

        <Stack.Screen 
            name={screen.screenOption2} 
            component={Profile} 
        />

    </Stack.Navigator>
  )
}

export default AppStack