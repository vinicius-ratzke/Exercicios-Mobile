const initialState = {
    notes: [],
  };
  
  const actions = {
    ADD_NOTE: 'add_note',
    EDIT_NOTE: 'edit_note',
    DELETE_NOTE: 'delete_note',
  };
  
  const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.ADD_NOTE:
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
      case actions.EDIT_NOTE:
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.id === action.payload.id ? action.payload : note
          ),
        };
      case actions.DELETE_NOTE:
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export { actions, notesReducer };
  