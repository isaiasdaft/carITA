import * as React from "react";
import { StyleSheet } from "react-native";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image, Link, Text, Alert, ScrollView } from "native-base";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, auth2 } from '../../firebase-config';
import { sendEmailVerification } from 'firebase/auth';


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

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth2, email, password)
      .then((userCredential) => {
        sendEmailVerification(userCredential.user)
          .then(() => {
            auth.signOut();
            console.log('Correo electrónico de verificación enviado');
            // Resto del código
            console.log(user);
          
          })
          handleConfr();
      })
      .catch((error) => {
        console.log(error)
        Alert.alert(error.message)

      });

  }


  return (
    <ScrollView style={styles.containerScroll}>
  <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
        Create Account
      </Heading>
      <Image
        style={{ width: 140, height: 120, marginLeft: 70 }}
        source={require('../img/logo-carita.png')}
      />
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
          <Input onChangeText={(text) => setEmail(text)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" onChangeText={(text) => setPassword(text)} />
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={handleCreateAccount} bg="#015D52">
          Register
        </Button>
        <Text>Ya tienes cuenta?.
          <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1" onPress={handleLo}>
            Iniciar sesión
          </Link>
        </Text>
      </VStack>
    </Box>
  </Center>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  containerScroll:{
    padding:8,

  }
});

export default Regis;