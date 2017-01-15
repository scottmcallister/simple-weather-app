export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

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
