import React from "react";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";


const Contac = () => {
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "449245566",
        timeStamp: "12:47 PM",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "66776556",
        timeStamp: "11:11 PM",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "1",
        fullName: "24567788",
        timeStamp: "6:22 PM",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, ];
    return <Box>
        <Heading fontSize="xl" p="4" pb="3">
            Contactos:
        </Heading>
        <FlatList data={data} renderItem={({
            item
        }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                    <Avatar size="48px" source={{
                        uri: item.avatarUrl
                    }} />
                    <VStack>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold>
                            {item.fullName}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {item.recentText}
                        </Text>
                    </VStack>
                    <Spacer />
                    <Text fontSize="xs" _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" alignSelf="flex-start">
                        {item.timeStamp}
                    </Text>
                </HStack>
            </Box>} keyExtractor={item => item.id} />
    </Box>;
};

export default Contac;