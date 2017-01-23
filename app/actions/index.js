/* eslint no-undef: "off" */

import config from '../../config';

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const UPDATE_WEATHER_DATA = 'UPDATE_WEATHER_DATA';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

/**
 * updateSearchTerm - set new search term
 * @param  {string} searchTerm - what the user entered
 * @return {object} Action
 */
export function updateSearchTerm(searchTerm) {
    return {
        type: UPDATE_SEARCH_TERM,
        searchTerm,
    };
}

/**
 * updateWeatherData - set data from API response
 * @param  {object} weatherData - response from API
 * @return {object} Action
 */
export function updateWeatherData(weatherData) {
    return {
        type: UPDATE_WEATHER_DATA,
        weatherData,
    };
}

export function setErrorMessage(errorMessage) {
    return {
        type: SET_ERROR_MESSAGE,
        errorMessage,
    };
}

export function searchByCity(searchTerm) {
    const { appid, url } = config;
    return fetch(`${url}?q=${searchTerm}&appid=${appid}`)
        .then(response => response.json())
        .then(data => updateWeatherData(data))
        .catch(() => {
            updateWeatherData({});
            setErrorMessage(`Could not fetch weather for ${searchTerm}`);
        });
}
