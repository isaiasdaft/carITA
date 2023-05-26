import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import Inicio from './Inicio';
import Storedc from './Storedc';
import Appoinment from './Appoinment';
import Historial from './Historial';
import About from './About_us';
import Rate from './Rate_us';
import Contac from './Contact';
import Settings from './Settings';
import Langua from './Language';
import { NativeBaseProvider, Stack } from 'native-base';
import AppStack from '../navigation/AppStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItem } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';

import { Box,   HStack, Icon, Menu, Pressable } from "native-base";


function Feed() {
  return (
    <View style={{  }}>
     
       <Inicio />
          
    </View> 
  );
}



function Article() {
  return (
    <View style={{ }}>
      <Appoinment />
    </View>
  );
}

function Contacts() {
    return (
      <View style={{ }}>
          <Contac />
      </View>
    );
  }
  
  function Storedcars() {
    return (
      <View style={{  }}>
        <Storedc/>
      </View>
    );
  }
  function History() {
    return (
      <View style={{ }}>
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
      <View style={{}}>
        <Rate />
      </View>
    );
  }
  


const Drawer = createDrawerNavigator();


function MyDrawer() { 

  const navigation = useNavigation();
    
const goToSettings = () => {
  navigation.navigate("Settings");
}

const goToLanguage = () => {
    navigation.navigate("Language");
  }
  
  return (
    <NativeBaseProvider>
      <HStack bg="#6B0000" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack>
        </HStack>
        <HStack>
          <Menu 
            backgroundColor="#fff"
            w="190" 
            trigger={triggerProps => {
              return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                      <Icon 
                        as={<Ionicons name="ellipsis-vertical"/>} 
                        size="md"
                        ml="2" 
                        color="dark" 
                        mr='3'/>
                    </Pressable>
              }}>
            <Menu.Item onPress={goToSettings} >Settings</Menu.Item>
            <Menu.Item onPress={goToLanguage}>Language</Menu.Item>
          </Menu>
        </HStack>
      </HStack>
  
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

