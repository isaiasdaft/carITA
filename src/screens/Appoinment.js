import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image, Link, Text, ScrollView } from "native-base";


const Regis = ({ navigation }) => {

        const handleRegis = () => {
          // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión
      
          // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
          navigation.navigate("Register");
        }

        const handleLo = () => {
          // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión
      
          // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
          navigation.navigate("Login");
        }


        const handleConfr = () => {
            // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión
        
            // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
            navigation.navigate("ConfirmAccount");
          }
      
  return <ScrollView> 
    <Center w="100%">
      <Box safeArea p="2" w="100%" maxW="250" py="8">
        <Heading size="md" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Create A nueva cita
        </Heading>
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
          <Button mt="2" colorScheme="indigo" onPress={handleConfr} bg="#015D52">
            guardar
          </Button>

        </VStack>
      </Box>
    </Center>
    </ScrollView>;
};

export default Regis;