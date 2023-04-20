import React from "react";
import { Text,TextArea, Box, Center, NativeBaseProvider, Button } from "native-base";

const Rate = () => {
  return <Box alignItems="center" w="100%">
    <Text>Califica nuestro trabajo: </Text>
    <Text>{'\n'}</Text>
      <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
      <Text>{'\n'}</Text>
      <Button>Enviar</Button>
    </Box>;
};

export default Rate;