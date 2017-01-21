import React from 'react';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

// import * as reducers from '../reducers';
import searchReducer from '../reducers/search';
import WeatherApp from './weatherApp';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(reducer);

const store = createStore(searchReducer, composeWithDevTools(
    applyMiddleware(thunk, promise),
));

const App = () =>
    (<Provider store={store}>
      <WeatherApp />
    </Provider>);

export default App;
