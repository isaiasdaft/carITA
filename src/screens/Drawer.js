import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from './Inicio';
import Historial from './Historial';
import About from './About_us';
import { NativeBaseProvider } from 'native-base';



function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
                <Inicio />
          
    </View> 
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Appoinment</Text>
    </View>
  );
}

function Contacts() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contacts</Text>
      </View>
    );
  }
  
  function Storedcars() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Storedcars</Text>
      </View>
    );
  }
  function History() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Historial />
      </View>
    );
  }
  
  function Aboutus() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <About />
      </View>
    );
  }
  function Rateus() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Rateus</Text>
      </View>
    );
  }
  
 

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NativeBaseProvider>
    <Drawer.Navigator useLegacyImplementation>
      
      <Drawer.Screen name="Home" component={Feed} />
      
      <Drawer.Screen name="Appoinment" component={Article} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Storedcars" component={Storedcars} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Aboutus" component={Aboutus} />
      <Drawer.Screen name="Rateus" component={Rateus} />
    </Drawer.Navigator>
    </NativeBaseProvider>
  );
}

