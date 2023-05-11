import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import Inicio from './Inicio';
import Storedc from './Storedc';
import Historial from './Historial';
import About from './About_us';
import Rate from './Rate_us';
import Contac from './Contact';
import { NativeBaseProvider } from 'native-base';
import AppStack from '../navigation/AppStack';
import { SafeAreaView } from 'react-native-safe-area-context';


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
        <Contac />
      </View>
    );
  }
  
  function Storedcars() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Storedc/>
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
        <Rate />
      </View>
    );
  }
  


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    
    <NativeBaseProvider>
    <Drawer.Navigator  useLegacyImplementation
      drawerContent={
        (props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height:200,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: "#f4f4f4",
                  borderBottomWidth: 1,
                  backgroundColor: '#F3F9FF'
                }}
              >
               <Image
                  style={{ width: 150, height: 150 }}
                  source={require('../img/logo-carita.png')}
                  />

              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          )
        }
      }
      screenOptions={{
      drawerStyle:{
        backgroundColor: "#6B0000",
        width: 250
      },
      headerStyle:{
        backgroundColor: "#6B0000",
      },
      headerTintColor: "#F3F9FF",
      headerTintleStyle:{
        fontWeight: "bold"
      },
      drawerActiveBackgroundColor:'#015D52',
      drawerActiveTintColor: "white",
      drawerLabelStyle:{
        color:"#CBDBC3"
      }
    }}>

      <Drawer.Screen name="Home" component={Feed} />

      <Drawer.Screen name="Appoinment" component={Article} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Stored Cars" component={Storedcars} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="About Us" component={Aboutus} />
      <Drawer.Screen name="Rate Us" component={Rateus} />
    </Drawer.Navigator>
    </NativeBaseProvider>
  );
}

export default MyDrawer;

