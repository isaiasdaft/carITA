import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image, Link, Text, ScrollView, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import firebase from "../../firebase-config";


const Regis = (props) => {

  const [state, setState] = useState({
    namerUser: "",
    marca: "",
    model: "",
    year: "",
    date: "",
    description: ""
  })

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value })
  }

  const saveNewApponiment = async () => {
    if (state.namerUser === '') {
      alert('porfavor ingresa los datos');
    } else {
      try {
        await firebase.db.collection('appoinment').add({
          namerUser: state.namerUser,
          marca: state.marca,
          model: state.model,
          year: state.year,
          date: state.date,
          description: state.year,
        })
        props.navigation.navigate("InfoQuote"); 

      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View>
            <View>
          <Heading size="md" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }} fontWeight="semibold">
            Crear nueva cita
          </Heading>
          </View>
         
         <View>
           <Heading mt="1" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="medium" size="xs">
            Ingresa los datos de la cita
          </Heading>
          </View>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Nombre del cliente</FormControl.Label>
              <Input
                onChangeText={(value) => handleChangeText('namerUser', value)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Fabricante del Vehículo Marca</FormControl.Label>
              <Input
                onChangeText={(value) => handleChangeText('marca', value)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label> Modelo </FormControl.Label>
              <Input
                onChangeText={(value) => handleChangeText('model', value)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Año</FormControl.Label>
              <Input
                onChangeText={(value) => handleChangeText('year', value)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Fecha de llegada</FormControl.Label>
              <Input
                onChangeText={(value) => handleChangeText('date', value)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Descrpción del auto</FormControl.Label>
              <Input
                onChangeText={(value) => handleChangeText('description', value)}
              />
            </FormControl>

            <Button mt="2" colorScheme="indigo"
              onPress={() => saveNewApponiment()}
              bg="#015D52">
              guardar
            </Button>

          </VStack>
          </View>
        </ScrollView>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#015D52'
  },
  container: {
    flex: 1,
    padding: 15,
  }
})

export default Regis;