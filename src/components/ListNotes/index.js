import React, { useEffect } from "react";
import { Notes } from "../Notes";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { getNotesThunk } from "../../state/actions/notesActions";

export const ListNotes = () => {
    const dispatch = useDispatch();
    const notesRedux = useSelector((state) => state.notesReducer.notes);
    const renderRedux = useSelector((state) => state.notesReducer.render);

    useEffect(() => {
        if (renderRedux) dispatch(getNotesThunk());
    }, [dispatch, renderRedux]);

    return (
        <div>
            <h3>Estas son las notas que tienes</h3>
            {notesRedux &&
                notesRedux.map((note) => <Notes note={note} key={note.id} />)}
        </div>
    );
};
