import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonsReducer } from './redux/reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const state = createStore(
  pokemonsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


root.render(
  <React.StrictMode>
    <Provider store={state}>
      <App />
    </Provider>
  </React.StrictMode>
);
