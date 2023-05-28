import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container } from 'native-base';

const SplashScreen = ({ navigation }) => {
  
  useEffect(() => {
    // Simular una operación de carga
    // Aquí puedes realizar cualquier tarea de inicialización de tu aplicación

    // Redirigir a la siguiente pantalla después de 3 segundos
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
        style={{ width: 140, height: 120, marginLeft: 70 }}
        source={require('../img/logo-carita.png')}
      />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
