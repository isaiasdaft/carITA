import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Alert } from "react-native";
import { Heading, View, NativeBaseProvider, ScrollView, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebase-config";
import { ActivityIndicator } from "react-native-web";

const DetailsContacts = (props) => {

    const initialState = {
        id: "",
        name: "",
        email: "",
        phone: "",
    }

    const [user, setUser] = useState();

    const [loading, setLoading] = useState(true)

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({
            ...user,
            id: doc.id,
        });
        setLoading(false)

    }

    useEffect(() => {
        getUserById(props.route.params.userId);

    }, []);

    const handleChangeText = (name, value) => {
        setUser({ ...user, [name]: value})
    };

    const deleteContact = async () =>{
       const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
       await dbRef.delete();
       props.navigation.navigate("Contact")
    }

    const openConfirmation = () =>{
        Alert.alert('Remove the contact', 'Are you sure?', [
            {text: 'Yes', onPress: () => deleteContact()},
            {text: 'No', onPress: () => console.log(false)},
        ])
    }
    const updateContact = async() => {
        const dbRef = firebase.db.collection('users').doc(user.id);
        await dbRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        setUser(initialState)
        props.navigation.navigate("Contact"); 
    }

    if(loading){
        return(
            <View>
                <ActivityIndicator size="large" color="#9e9e9e"/>
            </View>
        );
    }
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Nombre de Contacto"
                    value={user.name}
                    onChangeText={(value) => handleChangeText('name', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Email"
                    value={user.email}
                    onChangeText={(value) => handleChangeText('email', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Número de Telefóno"
                    value={user.phone}
                    onChangeText={(value) => handleChangeText('phone', value)}
                />
            </View>
            <View>
                <Button bg="#32ab30" mt="2" title="update Contact" onPress={() => updateContact()}>
                    Editar
                </Button>
            </View>
            <View>
            <Button bg="#cd121d" mt="2" title="delete Contact" onPress={() => openConfirmation()}>
                    Eliminar Contacto
                </Button>
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom:15,
        borderBottomWidth: 1,
        borderBottomColor: '#015D52'
    },
    container:{
        flex: 1,
        padding: 35,
    }
})

export default DetailsContacts;