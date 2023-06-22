import React, { createContext, useReducer } from 'react';
import { actions, notesReducer } from './notesReducer';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, { notes: [] });

  const addNote = (note) => {
    dispatch({ type: actions.ADD_NOTE, payload: note });
  };

  const editNote = (note) => {
    dispatch({ type: actions.EDIT_NOTE, payload: note });
  };

  const deleteNote = (id) => {
    dispatch({ type: actions.DELETE_NOTE, payload: id });
  };

  const value = { state, addNote, editNote, deleteNote };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};

export { NotesContext, NotesProvider };
