import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image} from "native-base";


const Forgot = ({ navigation }) => {

        const handleRegis = () => {
          // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión
      
          // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
          navigation.navigate("forget");
        }

        const handleVer = () => {
            // Aquí iría el código para validar las credenciales del usuario y guardar la información de sesión
        
            // Una vez que el usuario ha iniciado sesión, navegamos a la pantalla del cajón
            navigation.navigate("verified");
          }
      
  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
            Confirmar Nueva Cuenta
      </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Ingresa el código de confirmacion para iniciar sesión
        </Heading>
        <Image
          style={{ width: 120, height: 120, marginLeft:80 }}
          source={require('../img/confirmEmail.png')}
          />
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Código de verificación</FormControl.Label>
            <Input />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleVer} bg="#015D52" >
            Enviar Código
          </Button>
        </VStack>
      </Box>
    </Center>;
};

export default Forgot;