import React from 'react';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

// import * as reducers from '../reducers';
import searchReducer from '../reducers/search';
import WeatherApp from './weatherApp';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(reducer);

console.log('search:');
console.log(searchReducer);

const store = createStore(searchReducer);

const App = () =>
    (<Provider store={store}>
      <WeatherApp />
    </Provider>);

export default App;
