import { UPDATE_SEARCH_TERM } from '../actions';

const initialState = {
    city: '',
};

const searchReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case UPDATE_SEARCH_TERM: {
        return Object.assign({}, state, {
            city: action.searchTerm,
        });
    }
    default:
        return state;
    }
};

export default searchReducer;
