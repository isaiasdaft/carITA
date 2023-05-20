import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Image, Alert } from "native-base";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config"; 

const Login = ({ navigation }) => {

  const handleLogin = () => {
    // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión

    // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
    navigation.navigate("Home");
  }
  const handleRegis = () => {
    // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión

    // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
    navigation.navigate("Register");
  }
  
  const handleForgot = () => {
    // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión

    // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
    navigation.navigate("forget");
  }

  const[email, setEmail]= React.useState('')
  const[password, setPassword]= React.useState('')

  const app= initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const handleCreateAccount = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Cuenta creada')
      const user = userCredential.user;
      console.log(user)
      
    })
    .catch((error) => {
      console.log(error)
      Alert.alert(error.message)
      // ..
    });
  }

  const handleSignIn = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Sesion Iniciada')
      const user = userCredential.user;
      console.log(user)
      handleLogin();
    })
    .catch((error) => {
      console.log(error)
      Alert.alert(error.message)
      // ..
    });
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
            <Input onChangeText={(text) => setEmail(text)}/>
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
    </Center>;
};

export default Login;
