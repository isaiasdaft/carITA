import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Image } from "native-base";
import Logo from '../img/logo-carita.png'

const Login = ({ navigation }) => {

  const handleLogin = () => {
    // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión

    // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
    navigation.navigate("Regresar");
  }
  const handleRegis = () => {
    // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión

    // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
    navigation.navigate("Regiser");
  }
  
  const handleForgot = () => {
    // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión

    // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
    navigation.navigate("forget");
  }

  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <Image
          style={{ width: 120, height: 120, marginLeft:160 }}
          source={require('../img/logo-carita.png')}
          />

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1" onPress={handleForgot}>
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLogin} bg="#015D52">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Button mt="2" colorScheme="indigo" onPress={handleRegis} bg="#015D52">
            Register
          </Button>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

export default Login;
