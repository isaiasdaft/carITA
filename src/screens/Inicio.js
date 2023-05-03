import React from "react";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";


const Inicio = () => {
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Francisco-Nissan",
        timeStamp: "12:47 PM",
        recentText: <Text>
            
            estatus: problema en el raidador {'\n'}
            tiempo estimado: 13/03/2023 {'\n'}
            costo inicial: $850
            
        </Text>,
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Hugo-Mazda",
        timeStamp: "11:11 PM",
        recentText: <Text>
            estatus: Luces delanteras y traseras rotas.{'\n'}
            tiempo estimado: 08/03/2023{'\n'}
            costo inicial: $1015

        </Text>,
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "1",
        fullName: "Paola-Altima",
        timeStamp: "6:22 PM",
        recentText: <Text>

        estatus: Frenos defectuosos falta de aceite{'\n'}
        tiempo estimado: 13/03/2023{'\n'}
        costo inicial: $2200

    </Text>,
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "",
        timeStamp: "",
        recentText: "",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        
    }];
    return <Box>
        <Heading fontSize="xl" p="4" pb="3">
            Today
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

export default Inicio;