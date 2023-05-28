import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, ScrollView } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';


const Settings = ({ navigation }) => {

  const navigateProfile = () =>{
    console.log("función de perfil")
  }

  const navigateNotification = () => {
    console.log("funcion de notificación")
  }

  const navigateSecurity = () => {
    console.log("funcion de seguridad")
  }

  const navigatePrivacy = () => {
    console.log("funcion de privacidad")
  }

  const navigateCredit = () => {
    console.log("funcione de la suscripción")
  }

  const navigateHelp = () => {
    console.log("funcione de la suscripción")
  }

  const navigateTerminos = () => {
    console.log("funcione de la suscripción")
  }

  const accountItems = [{ icon: "person-outline", text: "Editar cuenta", action: navigateProfile },
  { icon: "security", text: "Seguridad", action: navigateSecurity },
  { icon: "notifications-none", text: "Notificaciones", action: navigateNotification },
  { icon: "lock-outline", text: "Privacidad", action: navigatePrivacy},];

  const supportItems = [{ icon: "credit-card", text: "Suscripción", action: navigateCredit },
  { icon: "help-outline", text: "Ayuda y soporte", action: navigateHelp },
  { icon: "info-outline", text: "Terminos y condiciones", action: navigateTerminos },];

  const rederSettingsItem =({icon, text, action}) =>(
    <TouchableOpacity onPress={action} style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingLeft: 12
    }}>
        <MaterialIcons name={icon} size={24} color="black" />
        <Text style={{
          marginLeft: 36,
          fontWeight: 600,
          fontSize: 16
        }}>{text}</Text>

    </TouchableOpacity>
  )

  const handleLo = () => {
    // Código para validar las credenciales y guardar la información de sesión
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ marginHorizontal: 10, flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontSize: 22 }}>Configuraciones</Text>
        </View>
        <ScrollView style={{marginHorizontal: 12}}>
        <View style={{ marginBottom: 12, backgroundColor: "#dae0df" }}>
          <Text style={{ marginVertical: 10, fontSize: 18 }}>Cuenta</Text>
          <View style={{ borderRadius: 12, backgroundColor: "#eef5ff" }}>

            {
              accountItems.map((item,index) =>(
                  <React.Fragment key={index}>
                    {rederSettingsItem(item)}
                  </React.Fragment>
              ))
            }

          </View>
        </View>
        {/* support */}
        <View style={{ marginBottom: 12, backgroundColor: "#dae0df" }}>
          <Text style={{ marginVertical: 10, fontSize: 18 }}>Soporte y ayuda</Text>
          <View style={{ borderRadius: 12, backgroundColor: "#eef5ff" }}>

            {
              supportItems.map((item,index) =>(
                  <React.Fragment key={index}>
                    {rederSettingsItem(item)}
                  </React.Fragment>
              ))
            }

          </View>
        </View>



        </ScrollView>
        

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 35 }}>
          <Button bg="#d3041a" onPress={handleLo}> Cerrar sesion </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,

  },
  header: {
    paddingHorizontal: 18,
    marginBotton: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#1d1d1d',
    marginBotton: 6,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#8f9291'

  },

});

export default Settings