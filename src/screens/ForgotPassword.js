import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image } from "native-base";
import { Icon } from "react-native-elements";
import { auth, auth2 } from '../../firebase-config';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
 

const Forgot = ({ navigation }) => {

  const handleLo = () => {
    navigation.navigate("Login");
  }

  const [state, setState] = useState ({
    email:'',
  })

  const [email, setEmail] = useState('')

  const forgetPassword =  () => {
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert("Password reset email sent")
    }).catch((error) => {
      alert(error)
    })

  }




  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
         Has Olvidado tu Contraseña?
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
          Ingresa tu correo para enviar tu contraseña
        </Heading>
        <Image
          style={{ width: 120, height: 120, marginLeft: 80 }}
          source={require('../img/lock.png')}
        />
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input 
            placeholder="Ingresa tu correo electrónico.."
            onChangeText={(text) => setEmail(text)} 
            keyboardType="email-address"
            rightIcon={
              <Icon
                type="material-community"
                name="at"
                iconStyle={styles.icon}
                />
              
             }
          />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={forgetPassword} bg="#015D52">
            Enviar
          </Button>
       
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  icon:{
    color:"#c1c1c1"
  }
})

export default Forgot;