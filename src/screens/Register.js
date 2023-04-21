import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";


const Regis = ({ navigation }) => {

        const handleRegis = () => {
          // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión
      
          // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
          navigation.navigate("Regiser");
        }

        const handleLo = () => {
            // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión
        
            // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
            navigation.navigate("Login");
          }
      
  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
        <FormControl>
            <FormControl.Label>Usuario</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLo}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>;
};

export default Regis;