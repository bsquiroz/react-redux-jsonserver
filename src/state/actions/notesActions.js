import axios from "axios";

const baseURL = "http://localhost:5000/notes";

export const types = {
    RENDERIZAR_NOTAS: "RENDERIZAR_NOTAS",
    MODIFICANDO_UNA_NOTA: "MODIFICANDO_UNA_NOTA",
    CANCELAR_MODIFICANDO_DE_NOTA: "CANCELAR_MODIFICANDO_DE_NOTA",

    // Obtener todas las notas
    OBTENER_NOTAS: "OBTENER_NOTAS",
    OBTENER_NOTAS_EXITO: "OBTENER_NOTAS_EXITO",
    OBTENER_NOTAS_FRACASO: "OBTENER_NOTAS_FRACASO",

    // Crear una nota
    CREAR_NOTA: "CREAR_NOTA",
    CREAR_NOTA_FRACASO: "CREAR_NOTA_FRACASO",

    //Eliminar una nota
    ELIMINAR_NOTAS: "ELIMINAR_NOTAS",
    ELIMINAR_NOTAS_FRACASO: "ELIMINAR_NOTAS_FRACASO",

    // Modificar una nota
    MODIFICAR_NOTAS: "MODIFICAR_NOTAS",
    MODIFICAR_NOTAS_FRACASO: "MODIFICAR_NOTAS_FRACASO",
};

// ------------------------------ INICIO renderizar las notas ---------------------------//
const renderNotes = () => {
    return {
        type: types.RENDERIZAR_NOTAS,
    };
};
// ------------------------------ FIN renderizar las notas ---------------------------//

// ------------------------------ INICIO modificando una nota ---------------------------//
export const updatingNote = (note) => {
    return {
        type: types.MODIFICANDO_UNA_NOTA,
        payload: note,
    };
};
// ------------------------------ FIN modificando una nota ---------------------------//

// ------------------------------ INICIO cancelar modificion de una nota ---------------------------//
export const CancelUpdatingNote = () => {
    return {
        type: types.CANCELAR_MODIFICANDO_DE_NOTA,
    };
};
// ------------------------------ FIN cancelar modificion de una nota ---------------------------//

// ------------------------------ INICIO obtener las notas ---------------------------//
const getNotes = () => {
    return {
        type: types.OBTENER_NOTAS,
    };
};

const getNotesSuccess = (notes) => {
    return {
        type: types.OBTENER_NOTAS_EXITO,
        payload: notes,
    };
};

const getNotesFail = (err) => {
    return {
        type: types.OBTENER_NOTAS_FRACASO,
        payload: err,
    };
};

export const getNotesThunk = () => {
    return async function (dispatch) {
        dispatch(getNotes());
        try {
            const res = await axios.get(baseURL);
            return dispatch(getNotesSuccess(res.data));
        } catch (error) {
            return dispatch(getNotesFail(error));
        }
    };
};

// ------------------------------ FIN obtener las notas ---------------------------//

// ------------------------------ INICIO crear una nota ---------------------------//
const postNote = () => {
    return {
        type: types.CREAR_NOTA,
    };
};

const postNoteFail = (error) => {
    return {
        type: types.CREAR_NOTA_FRACASO,
        payload: error,
    };
};

export const postNoteThunk = (note) => {
    return async function (dispatch) {
        dispatch(postNote());
        try {
            await axios.post(baseURL, note);
            return dispatch(renderNotes());
        } catch (error) {
            return dispatch(postNoteFail(error));
        }
    };
};
// ------------------------------ FIN crear una nota ---------------------------//

// ------------------------------ INICIO eliminar una nota ---------------------------//
const deleteNote = () => {
    return {
        type: types.ELIMINAR_NOTAS,
    };
};

const deleteNoteFail = (error) => {
    return {
        type: types.ELIMINAR_NOTAS_FRACASO,
        payload: error,
    };
};

export const deleteNoteThunk = (id) => {
    return async function (dispatch) {
        dispatch(deleteNote());
        try {
            await axios.delete(`${baseURL}/${id}`);
            return dispatch(renderNotes());
        } catch (error) {
            return dispatch(deleteNoteFail(error));
        }
    };
};
// ------------------------------ FIN eliminar una nota ---------------------------//

// ------------------------------ INICIO modificar una nota ---------------------------//
const putNote = () => {
    return {
        type: types.MODIFICAR_NOTAS,
    };
};

const putNoteFail = (error) => {
    return {
        type: types.MODIFICAR_NOTAS_FRACASO,
        payload: error,
    };
};

export const putNoteThunk = (note) => {
    return async function (dispatch) {
        dispatch(putNote());
        try {
            await axios.put(`${baseURL}/${note.id}`, note);
            return dispatch(renderNotes());
        } catch (error) {
            return dispatch(putNoteFail(error));
        }
    };
};
// ------------------------------ FIN modificar una nota ---------------------------//
