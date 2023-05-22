import React, {useEffect, useState} from "react";
import { Box, FlatList, Heading, View, Text, Spacer, Center, NativeBaseProvider, Button, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import  firebase  from "../../firebase-config"; 
import { ListItem, Avatar } from "react-native-elements";

const Contac = (props) => { 

    const navigation = useNavigation();
    
    const goToCreateContac = () => {
      navigation.navigate("CreateContact");
    }

    const goToDetailsContact = () => {
        navigation.navigate("DetailsContact");
      }


    const [users, setUsers] = useState([])

    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users = [];

            querySnapshot.docs.forEach(doc => {
                const{name, email, phone} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            });
            console.log(users)
            setUsers(users)
        });
    }, []);

    
    return (
    <ScrollView>
        <Button bg="#015D52" mt="1" title="create contact" onPress={goToCreateContac}>
            Crear nuevo Contacto
        </Button>
        { users.map(user =>{
                return (
                    <ListItem key={user.id} 
                    bottomDivider
                      onPress={() => { 
                            props.navigation.navigate("DetailsContact",{
                            userId: user.id})
                        }}>
                        

                       <ListItem.Chevron/>
                        <Avatar source={{
                            uri: 'https://thumbs.dreamstime.com/b/icono-privado-de-avatar-del-hombre-joven-81471506.jpg',
                        }}
                        rounded
                         />
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.phone}</ListItem.Subtitle>
                            </ListItem.Content> 
                    </ListItem>
                )
            })
        }
    </ScrollView>
    );

};

export default Contac;