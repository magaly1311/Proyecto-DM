// MainScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = ({ navigation }: { navigation: any }) => {
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // Recupera las notas almacenadas en AsyncStorage
        const storedNotes = await AsyncStorage.getItem('notes');
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error('Error fetching notes', error);
      }
    };

    fetchNotes();
  }, []);

  const handleAddNote = () => {
    navigation.navigate('AddNote');
  };

  return (
    <View style={styles.container}>
      <Text>Página principal</Text>
      {notes.map((note, index) => (
        <View key={index} style={styles.noteContainer}>
          <Text>{note}</Text>
        </View>
      ))}
      
      <TouchableOpacity style={styles.button} onPress={handleAddNote}>
        <Text style={styles.buttonText}>Agregar Nueva Nota</Text>
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
  noteContainer: {
    backgroundColor: '#F2E9E4',
    padding: 50,
    margin: 5,
    borderRadius: 10,
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

export default MainScreen;