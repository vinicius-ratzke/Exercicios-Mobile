import React, { useContext, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { NotesContext } from '../context/NotesContext';

const EditNoteScreen = ({ navigation, route }) => {
  const { state, editNote } = useContext(NotesContext);
  const { id } = route.params;
  const note = state.notes.find((note) => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const onSaveNote = () => {
    if (title && content) {
      editNote({
        id: note.id,
        title: title,
        content: content,
      });
      navigation.goBack();
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save" onPress={onSaveNote} />
    </View>
  );
};

export default EditNoteScreen;
