import { types } from "../actions/notesActions";

const initial_state = {
    notes: [],
};

const notesReducer = (state = initial_state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default notesReducer;
