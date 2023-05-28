import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Image, Alert } from "native-base";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, auth2 } from '../../firebase-config';


const Login = ({ navigation }) => {
  const handleLogin = () => {
    // Código para validar las credenciales y guardar la información de sesión
    navigation.navigate("Home");
  };

  const handleRegis = () => {
    navigation.navigate("Register");
  };

  const handleForgot = () => {
    navigation.navigate("forget");
  };



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth2, email, password)
      .then((userCredential) => {
        console.log('Sesion Iniciada')
        const user = userCredential.user;
        console.log(user)
        handleLogin();
      })
      .catch((error) => {
        console.log(error)
        Alert.alert(error.message)

      });
  };
  return (
    <Center w="100%">
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
          style={{ width: 120, height: 120, marginLeft: 160 }}
          source={require('../img/logo-carita.png')}
        />

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChangeText={(text) => setEmail(text)}  />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input onChangeText={(text) => setPassword(text)} type="password" />
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1" onPress={handleForgot}>
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSignIn} bg="#015D52">
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
    </Center>
  );


}

export default Login;
