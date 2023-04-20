import React, { useState } from "react";
import { Skeleton, Text, Button, Box, Image, VStack, Center, NativeBaseProvider } from "native-base";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState("");
  setTimeout(() => {
    setIsLoaded(true);
    setText("Es una aplicación desarrollada por alumnos del Instituto Tecnologico de Aguascalientes en la cual puedes organizar y registrar las citas que se presentan en un taller mecánico                                            Tambien puedes agendar los datos esenciales del cliente, sobre su auto y poder guardar el historial generado");
  }, 5000);
  return <Center w="100%">
      <Box w="90%" maxWidth="400">
        <VStack maxWidth="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
        borderColor: "coolGray.500"
      }} _light={{
        borderColor: "coolGray.200"
      }}>
          <Skeleton h="40" isLoaded={isLoaded}>
            <Image h="40" source={{
            uri: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          }} />
          </Skeleton>
          <Skeleton.Text lines={4} px="4" isLoaded={isLoaded}>
            <Text px="4" fontSize={"md"} lineHeight={"20px"}>
              {text}
            </Text>
          </Skeleton.Text>
        </VStack>
      </Box>
    </Center>;
};

export default About;