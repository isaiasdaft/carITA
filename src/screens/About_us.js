import React, { useState } from "react";
import { Skeleton, Text, Button, Box, Image, VStack, Center, NativeBaseProvider, Avatar, Heading, HStack } from "native-base";
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
          <Center><Image h="40" style={{ width: 200, height: 200 }}  source={(require("../img/logo-carita.png")
            )} /></Center>
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
            <HStack justifyContent="center" space={2}>
              <Avatar bg="green.500" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }}>
                AJ
              </Avatar>
              <Avatar bg="cyan.500" source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}>
                TE
              </Avatar>
              <Avatar bg="indigo.500" source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }}>
                
              </Avatar>
              <Avatar bg="amber.500" source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}>
                TS
              </Avatar>
            </HStack>
            <Text>
                Copyright © carITA2023
            </Text>
            </Center>

        </VStack>
      </Box>
    </Center>;
};

export default About;