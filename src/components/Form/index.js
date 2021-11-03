import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

import {
    postNoteThunk,
    CancelUpdatingNote,
    putNoteThunk,
} from "../../state/actions/notesActions";

const initial_state = {
    name: "",
    desc: "",
};

export const Form = () => {
    const updatingNoteRedux = useSelector(
        (state) => state.notesReducer.updatingNote
    );
    const dispatch = useDispatch();

    const [stateValues, setStateValues] = useState(initial_state);
    const { name, desc } = stateValues;

    useEffect(() => {
        updatingNoteRedux
            ? setStateValues(updatingNoteRedux)
            : setStateValues(initial_state);
    }, [updatingNoteRedux]);

    const handleInputs = (e) => {
        setStateValues({
            ...stateValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "" || desc.trim() === "")
            return alert("debes de llenar todos los campos");

        if (updatingNoteRedux) {
            dispatch(putNoteThunk(stateValues));
        } else {
            const obj = { ...stateValues, completed: false };
            dispatch(postNoteThunk(obj));
        }

        setStateValues(initial_state);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>
                    {" "}
                    {updatingNoteRedux
                        ? "Actualiza esta nota"
                        : "Agrega una nueva nota"}{" "}
                </h2>

                <div>
                    <label>
                        nombre:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputs}
                        />
                    </label>
                    <br />
                    <label>
                        descripción:
                        <input
                            type="text"
                            name="desc"
                            value={desc}
                            onChange={handleInputs}
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value={
                            updatingNoteRedux
                                ? "Actualizar la nota"
                                : "Crear una nota"
                        }
                    />
                </div>
            </form>
            {updatingNoteRedux && (
                <button onClick={() => dispatch(CancelUpdatingNote())}>
                    Cancelar edición
                </button>
            )}
        </div>
    );
};
