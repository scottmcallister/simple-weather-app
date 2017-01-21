import {
    UPDATE_SEARCH_TERM,
    UPDATE_WEATHER_DATA,
    SET_ERROR_MESSAGE,
} from '../actions';

const initialState = {
    city: '',
    weatherData: {},
    errorMessage: '',
};

const searchReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case UPDATE_SEARCH_TERM: {
        return Object.assign({}, state, {
            city: action.searchTerm,
        });
    }
    case UPDATE_WEATHER_DATA: {
        return Object.assign({}, state, {
            weatherData: action.weatherData,
        });
    }
    case SET_ERROR_MESSAGE: {
        return Object.assign({}, state, {
            errorMessage: action.errorMessage,
        });
    }
    default:
        return state;
    }
};

export default searchReducer;
