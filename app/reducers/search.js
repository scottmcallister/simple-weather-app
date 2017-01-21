import { UPDATE_SEARCH_TERM, UPDATE_WEATHER_DATA } from '../actions';

const initialState = {
    city: '',
    weatherData: {},
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
    default:
        return state;
    }
};

export default searchReducer;
