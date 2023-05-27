import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Card } from 'react-native-paper';
import { Box, FlatList, Heading, Avatar, HStack, VStack, Spacer, Center, NativeBaseProvider, Button, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";



const Inicio = () => {

  const navigation = useNavigation();

  const goToAppoinment = () => {
    navigation.navigate("Appoinment");
  }

  const goToInformatioQuote = () => {
    navigation.navigate("InformationCustomer");
  }



  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Agendar cita
        </Text>
        <Text style={styles.textStyle}>
          Revisa tus citas pendientes
        </Text>
        <View>
          <Card>
            <Card.Title title="Trabajos para Hoy" subtitle="Autos en reparación" />
            <Card.Content>
              <Text variant="titleLarge">Verifica tus citas</Text>
              <Text variant="bodyMedium">Modifica o cambia la información de una cita</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://www.autoavance.co/wp-content/uploads/2021/10/organizar-taller-mecanico.jpeg' }} />
            <Card.Actions>
              
              <Button onPress={goToInformatioQuote}>Ver Citas</Button>
            </Card.Actions>
          </Card>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={goToAppoinment}
            style={styles.touchableOpacityStyle}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
              source={{
                uri:
                  'https://icon-library.com/images/floating-icon/floating-icon-26.jpg',
              }}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    marginTop: 40,
    marginLeft: 260
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    //backgroundColor:'black'
  },
});


export default Inicio;