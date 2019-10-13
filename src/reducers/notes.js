import { ADD_NOTE } from '../actions/notes';

const notes = (state = [], action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, { ...action.payload, order: state.length }];

        default:
            return state;
    }
}

export default notes;