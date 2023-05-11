import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image, Link, Text } from "native-base";


const InfoQuote = ({ navigation }) => {
    
return <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading size="lg" color="coolGray.800" _dark={{
      color: "warmGray.50"
    }} fontWeight="semibold">
          Customer 
    </Heading>
      <Heading mt="1" color="coolGray.600" _dark={{
      color: "warmGray.200"
    }} fontWeight="medium" size="xs">
        Information of the Client
      </Heading>
    </Box>
  </Center>;

};

export default InfoQuote;