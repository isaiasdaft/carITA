import React, { useState } from "react";
import { Skeleton, Text, Button, Box, Image, VStack, Center, NativeBaseProvider, Avatar, Heading } from "native-base";
import AvatarGroup from 'react-avatar-group';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState("");
  setTimeout(() => {
    setIsLoaded(true);
    setText("Es una aplicación desarrollada por alumnos del Instituto Tecnológico de Aguascalientes en la cual puedes organizar y registrar las citas que se presentan en un taller mecánico                                            Tambien puedes agendar los datos esenciales del cliente, sobre su auto y poder guardar el historial generado");
  }, );
  return <Center w="100%">
      <Box w="90%" maxWidth="400">
        <VStack maxWidth="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
        borderColor: "coolGray.500"
      }} _light={{
        borderColor: "coolGray.200"
      }}>
          <Skeleton h="40" isLoaded={isLoaded}>
          <Center>
            <Image h="40" style={{ width: 200, height: 200 }}  source={(require("../img/logo-carita.png")
          )}
           
          /></Center>
          </Skeleton>
          <Skeleton.Text lines={4} px="4" isLoaded={isLoaded}>
            <Text px="4" fontSize={"md"} lineHeight={"20px"}>
              {text}
            </Text>
          </Skeleton.Text>
                
            <Center>
            <Heading fontSize="xl" p="4" pb="3">
             Equipo 7
            </Heading>
             </Center>
         
            <Center><AvatarGroup
                avatars={["Jesús Andrade Sustaita", "Sofia Belem Cano Macias", "Emiliano Hernández Rodríguez", "Abraham Isaías Ponce Moreno" /* or IAvatar objects */]}
                initialCharacters={2}
                max={3}
                size={60}
                displayAllOnHover
                shadow={2}
            /></Center>

        </VStack>
      </Box>
    </Center>;
};

export default About;