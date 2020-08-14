import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

import Header from './components/Header/Header';
import Body from './components/Body/Body';


// Redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const App = () => (
  <Provider store={store}>
    <div className="app pb-5">
      <Header />
      <Body />
    </div>
  </Provider>
);

export default App;
