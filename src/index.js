import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
// import { thunk } from 'redux-thunk';
// import { logger } from './middlewares';
// import rootReducer from './redux/reducers/rootReducers';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

// const state = createStore(
//   rootReducer,
//   composedEnhancers
// );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
