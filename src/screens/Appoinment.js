import * as React from "react";
import { StyleSheet, TextInput, Platform, DatePickerIOSBase } from "react-native";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image, Link, Text, ScrollView, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import firebase from "../../firebase-config";
import { TouchableOpacity } from "react-native-gesture-handler";


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
        props.navigation.navigate("Home");

      } catch (error) {
        console.log(error);
      }
    }
  }

  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };




  return (
    <ScrollView style={styles.containerScroll}>
      <View>
        <Heading size="md" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
          <Text> Crear una nueva cita </Text>
        </Heading>
      </View>
      <View>
        <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
          Ingresa los datos de la cita
        </Heading>
      </View>
      <View>
        <VStack space={1}>
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
          <View style={styles.container}>
            {/* Display the selected date */}
            <View style={styles.pickedDateContainer}>
              <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
            </View>

            {/* The button that used to trigger the date picker */}
            {!isPickerShow && (
              <View style={styles.btnContainer}>
                <Button title="Show Picker" color="purple" onPress={showPicker} />
              </View>
            )}

            {/* The date picker */}
            {isPickerShow && (
              <DateTimePicker
                value={date}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={true}
                onChange={onChange}
                style={styles.datePicker}
              />
            )}
          </View>

          <View>
            <Button mt="2" colorScheme="indigo"
              onPress={() => saveNewApponiment()}
              bg="#015D52">
              guardar
            </Button>
          </View>
        </VStack>
        <View>
          <Text>
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
    </ScrollView>


  );
};

const styles = StyleSheet.create({
  
  container: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  containerScroll:{
    padding:30,
    flex:1
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },


});

export default Regis;