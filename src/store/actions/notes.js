import * as actions from './actionsTypes';

// NOTE
export const saveNote = note => {
    return {
        type: actions.SAVE_NOTE,
        payload: note
    };
};

export const deleteNote = id => {
    return {
        type: actions.DELETE_NOTE,
        payload: id
    };
};

export const selectNote = id => {
    return {
        type: actions.SELECT_NOTE,
        payload: id
    };
};

export const unSelectNote = () => {
    return {
        type: actions.UNSELECT_NOTE
    };
};

export const getColorNote = color => {
    return {
        type: actions.GET_COLOR_NOTE,
        payload: color
    };
};

export const changeColorNote = id => { 
    return {
        type: actions.CHANGE_COLOR_NOTE,
        payload: id
    };
};

// EDITED NOTE
export const saveEditedNote = editedNote => {
    return {
        type: actions.SAVE_EDITED_NOTE,
        payload: editedNote
    };
};

export const updateEditedNote = () => {
    return {
        type: actions.UPDATE_EDITED_NOTE
    };
};



