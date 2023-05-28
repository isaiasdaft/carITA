import { View } from 'react-native'
import React from 'react'
import { Button, Radio, ScrollView, Switch, Heading, HStack, Text, Divider } from "native-base";

const Language = ({ navigation }) => {

  return (
    <ScrollView>
      <View>
        <Text></Text>
      </View>
      <View>
        <HStack alignItems="center" space={4}>
          <Text fontSize={28} marginLeft={5}>Español</Text>
          <Switch marginLeft={150} size="lg" colorScheme="emerald" />
        </HStack>
      </View>
      <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
      <View>
        <HStack alignItems="center" space={4}>
          <Text fontSize={28} marginLeft={5}>Ingles</Text>
          <Switch marginLeft={180} size="lg" colorScheme="emerald" />
        </HStack>
      </View>

    </ScrollView>
  )
}

export default Language