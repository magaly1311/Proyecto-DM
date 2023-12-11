// AddNoteScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNoteScreen = ({ navigation }: { navigation: any }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSaveNote = async () => {
    try {
      // Recupera las notas almacenadas
      const storedNotes = await AsyncStorage.getItem('notes');
      let notes: string[] = storedNotes ? JSON.parse(storedNotes) : [];

      // Agrega la nueva nota
      // Agrega la nueva nota
      const newNote = `${title}\n${description}\nDue: ${dueDate}`;
      notes.push(newNote);
      

      // Almacena las notas actualizadas
      await AsyncStorage.setItem('notes', JSON.stringify(notes));

      // Navega de vuelta a la pantalla principal
      navigation.navigate('Main');
    } catch (error) {
      console.error('Error saving note', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Agregar Nueva Nota</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de vencimiento"
        onChangeText={(text) => setDueDate(text)}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSaveNote}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 60,
    width: 350,
    borderColor: '#013440',
    borderWidth: 1,
    margin: 20,
    padding: 5,
  },
  button: {
    backgroundColor: '#659AA6', // Cambia a tu color preferido en formato de cadena de color
    padding: 20,
    borderRadius: 10, // Bordes redondeados
    marginTop: 50,
  },
  buttonText: {
    color: 'white', // Color del texto del botón
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Baskerville',
    color: 'darkblue', // Cambia a tu color preferido en formato de cadena de color
    fontWeight: 'bold', // Hace que el texto sea negrita
    marginBottom: 20,
  },
});

export default AddNoteScreen;