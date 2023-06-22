import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NotesContext } from '../context/NotesContext';

const NoteListScreen = ({ navigation }) => {
  const { state, deleteNote } = useContext(NotesContext);

  const renderNote = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.noteContainer}
        onPress={() => navigation.navigate('EditNote', { id: item.id })}
      >
        <Text style={styles.noteTitle}>{item.title}</Text>
        <TouchableOpacity onPress={() => deleteNote(item.id)}>
          <Feather name="trash-2" size={24} color="red" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {state.notes.length ? (
        <FlatList
          data={state.notes}
          renderItem={renderNote}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.notesList}
        />
      ) : (
        <Text style={styles.noNotesMessage}>Nenhuma nota encontrada</Text>
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddNote')}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  notesList: {
    paddingBottom: 100,
  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  noteTitle: {
    fontSize: 18,
  },
  noNotesMessage: {
    textAlign: 'center',
    marginTop: 50,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoteListScreen;
