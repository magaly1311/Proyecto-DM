// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    // Aquí puedes realizar la lógica de autenticación
    // En este ejemplo, simplemente comprobamos si el usuario y la contraseña no están vacíos
    if (username !== '' && password !== '') {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.title}>a AulaTrack</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B4D2D9',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Baskerville',
    color: 'darkblue', // Cambia a tu color preferido en formato de cadena de color
    fontWeight: 'bold', // Hace que el texto sea negrita
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'white',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  button: {
    backgroundColor: '#659AA6', // Cambia a tu color preferido en formato de cadena de color
    padding: 10,
    borderRadius: 5, // Bordes redondeados
    marginTop: 30,
  },
  buttonText: {
    color: 'white', // Color del texto del botón
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  
});

export default LoginScreen;