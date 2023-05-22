import React, {useState} from "react";
import { StyleSheet, TextInput } from "react-native";
import { Heading, View, ScrollView, VStack, Text, Button, Center, NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import  firebase  from "../../firebase-config"; 


const CreateContact = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value})
    }
    

    const addNewContact = async () => {
        if(state.name ===''){
            alert('porfavor ingresa los datos');
        }else {
           try {
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone
            })
            props.navigation.navigate("Contact"); 
            
           } catch (error) {
                console.log(error);
            
           }
        }
    }
    
    return (
    <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Nombre de Contacto" 
            onChangeText={(value) => handleChangeText('name', value)}
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Email" 
            onChangeText={(value) => handleChangeText('email', value)}
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Número de Telefóno" 
            onChangeText={(value) => handleChangeText('phone', value)}
            />
        </View>
        <View>
            <Button bg="#015D52" mt="2" title="Guardar Contacto" onPress={() => addNewContact()}>
                Guardar
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

export default CreateContact;