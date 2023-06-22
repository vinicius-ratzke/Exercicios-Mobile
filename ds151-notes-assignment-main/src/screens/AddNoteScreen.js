import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { NotesContext } from '../context/NotesContext';

const AddNoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useContext(NotesContext);

  const handleSaveNote = () => {
    const note = {
      title,
      content,
      date: new Date().toISOString(),
    };
    addNote(note);
    navigation.navigate('Notes List');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Title"
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
        placeholder="Content"
        multiline={true}
      />
      <Button title="Save" onPress={handleSaveNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
});

export default AddNoteScreen;
