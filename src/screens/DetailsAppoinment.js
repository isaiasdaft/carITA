import * as React from "react";
import { StyleSheet, TextInput, Alert, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import firebase from "../../firebase-config";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image, Link, Text, ScrollView } from "native-base";


const DetailsAppoinment = (props) => {

  const initialState = {
    id: "",
    namerUser: "",
    marca:"",
    model: "",
    year: "",
    date:"",
    description:""
  }

  const [appoinment, setAppoinment] = useState();
  const [loading, setLoading] = useState(true)


  const getAppoinmentById = async (id) => {
    const dbRef = firebase.db.collection('appoinment').doc(id)
    const doc = await dbRef.get();
    const appoinment = doc.data();
    setAppoinment({
      ...appoinment,
      id: doc.id,
    });
    setLoading(false)

  }

  useEffect(() => {
    getAppoinmentById(props.route.params.appoinmentId);
  }, []);

  const handleChangeText = (name, value) => {
    setAppoinment({ ...appoinment, [name]: value})
};

const deleteAppoiment = async () =>{
  const dbRef = firebase.db.collection('appoinment').doc(props.route.params.appoinmentId);
  await dbRef.delete();
  props.navigation.navigate("InformationQuote")
}

const openConfirmation = () =>{
  Alert.alert('Remove the contact', 'Are you sure?', [
      {text: 'Yes', onPress: () => deleteAppoiment()},
      {text: 'No', onPress: () => console.log(false)},
  ])
}

const updateAppoinment = async() => {
  const dbRef = firebase.db.collection('appoinment').doc(appoinment.id);
  await dbRef.set({
      namerUser: appoinment.namerUser,
      marca: appoinment.marca,
      model: appoinment.model,
      year: appoinment.year,
      date: appoinment.date,
      description: appoinment.description,

  })
     setAppoinment(initialState)
    props.navigation.navigate("InformationCustomer"); 
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
                    placeholder="Nombre del cliente"
                    value={appoinment.namerUser}
                    onChangeText={(value) => handleChangeText('namerUser', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Marca del auto"
                    value={appoinment.marca}
                    onChangeText={(value) => handleChangeText('marca', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="modelo del auto"
                    value={appoinment.model}
                    onChangeText={(value) => handleChangeText('model', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="año del auto"
                    value={appoinment.year}
                    onChangeText={(value) => handleChangeText('year', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Fecha de entreda del vehículo"
                    value={appoinment.date}
                    onChangeText={(value) => handleChangeText('date', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Descripción del trabajo"
                    value={appoinment.description}
                    onChangeText={(value) => handleChangeText('description', value)}
                />
            </View>
            <View>
                <Button bg="#32ab30" mt="2" title="update Contact" onPress={() => updateAppoinment()}>
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

export default DetailsAppoinment;