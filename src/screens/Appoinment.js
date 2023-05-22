import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image, Link, Text, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";


const Regis = () => {

    const navigation = useNavigation();
    
    const goToHome = () => {
      navigation.navigate("Home");
    }

        
      
  return <Center >
        <safeArea p="2" w="100%" maxW="250" py="8">
          <ScrollView> 
          <Heading size="md" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Crear nueva cita
        </Heading> 
        {'\n'}
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Ingresa los datos de la cita
        </Heading>
        <VStack space={3} mt="5">
        <FormControl>
            <FormControl.Label>Nombre del cliente</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Descrpción del auto</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Fabricate</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Modelo y año</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Fecha y hora</FormControl.Label>
            <Input type="password" />
          </FormControl>
         
          <Button small primary >
            <Text>Fecha</Text>
          </Button>
          <Button small primary style={{ marginTop: 10, marginBottom: 20  }}>
            <Text>Hora</Text>
         </Button>
          <Button mt="2" colorScheme="indigo" onPress={goToHome} bg="#015D52">
            guardar
          </Button>

        </VStack>
        </ScrollView>;
        </safeArea>
      
    </Center>
};

export default Regis;