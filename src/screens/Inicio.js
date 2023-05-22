import React from "react";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";


const Inicio = () => {

    const navigation = useNavigation();
    
    const goToAppoinment = () => {
      navigation.navigate("Appoinment");
    }

    const goToInformatioQuote = () => {
        navigation.navigate("InformationCustomer");
      }

   

    return(
    <Box>
     <Button colorScheme="indigo" onPress={goToAppoinment}>
                fdfd
    </Button>
    <Button colorScheme="red" onPress={goToInformatioQuote}>
                fdfd
    </Button>
    </Box>
    );
};

export default Inicio;