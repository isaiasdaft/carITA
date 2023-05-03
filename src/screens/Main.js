import { View } from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar';

// Native base imports
import { Box, Text, HStack, Icon, Menu, Pressable } from "native-base";

// Ionicons
import Ionicons from '@expo/vector-icons/Ionicons';

const Main = ({ navigation }) => {
  return (
    <View>
      <StatusBar style='dark' />
      <Box safeAreaTop bg="#fff" />
      <HStack bg="#fff" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack>
          <Text color="black" fontSize="20" fontWeight="bold" ml='4'>
            Main
          </Text>
        </HStack>
        <HStack>
          <Menu 
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
            <Menu.Item onPress={() => navigation.navigate(screen.screenOption1)}>Screen Option 1</Menu.Item>
            <Menu.Item onPress={() => navigation.navigate(screen.screenOption2)}>Screen Option 2</Menu.Item>
          </Menu>
        </HStack>
      </HStack>
    </View>
  )
}

export default Main