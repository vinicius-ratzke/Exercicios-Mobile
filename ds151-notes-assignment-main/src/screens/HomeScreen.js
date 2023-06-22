import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NotesContext } from '../context/NotesContext';

const HomeScreen = ({ navigation }) => {
  const { state } = useContext(NotesContext);

  return (
    <View style={styles.container}>
      {state.notes.length === 0 ? (
        <View style={styles.noNotesContainer}>
          <Text style={styles.noNotesText}>No Notes Found!</Text>
        </View>
      ) : (
        <FlatList
          data={state.notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.noteContainer}
                onPress={() => navigation.navigate('EditNote', { id: item.id })}
              >
                <Text style={styles.noteTitle}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => deleteNoteHandler(item.id)}
                  style={styles.deleteButton}
                >
                  <Feather name="trash" size={20} color="white" />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      )}

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddNote')}>
        <Feather name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noNotesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noNotesText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  noteTitle: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
