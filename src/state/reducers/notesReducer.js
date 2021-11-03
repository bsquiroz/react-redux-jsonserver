import { types } from "../actions/notesActions";

const initial_state = {
    notes: [],
    render: true,
    loading: false,
    error: false,
    updatingNote: null,
};

const notesReducer = (state = initial_state, action) => {
    switch (action.type) {
        case types.OBTENER_NOTAS:
        case types.MODIFICAR_NOTAS:
        case types.ELIMINAR_NOTAS:
        case types.CREAR_NOTA:
            return {
                ...state,
                loading: true,
                render: false,
                updatingNote: null,
            };

        case types.CREAR_NOTA_FRACASO:
        case types.MODIFICAR_NOTAS_FRACASO:
        case types.ELIMINAR_NOTAS_FRACASO:
        case types.OBTENER_NOTAS_FRACASO:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.OBTENER_NOTAS_EXITO:
            return {
                ...state,
                loading: false,
                notes: action.payload,
            };

        case types.RENDERIZAR_NOTAS:
            return {
                ...state,
                render: true,
                loading: false,
            };

        case types.MODIFICANDO_UNA_NOTA:
            return {
                ...state,
                updatingNote: action.payload,
            };

        case types.CANCELAR_MODIFICANDO_DE_NOTA:
            return {
                ...state,
                updatingNote: null,
            };

        default:
            return state;
    }
};

export default notesReducer;
