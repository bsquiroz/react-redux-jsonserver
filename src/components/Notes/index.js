import React from "react";
import { useDispatch } from "react-redux";
import "./styles.css";

import {
    deleteNoteThunk,
    updatingNote,
} from "../../state/actions/notesActions";

export const Notes = ({ note }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h4>{note.name}</h4>
            <b>
                <i>{note.desc}</i>
            </b>
            <br />
            <button onClick={() => dispatch(deleteNoteThunk(note.id))}>
                Eliminar
            </button>
            <button onClick={() => dispatch(updatingNote(note))}>
                Modificar
            </button>
            <hr />
        </div>
    );
};
