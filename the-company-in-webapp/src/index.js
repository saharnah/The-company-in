import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import App from './App';
import rootReducer from './reducers';
import rootEpic from './epics';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger'
import {ToastContainer} from "react-toastify";

const getStore = () => {
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(rootReducer, {}, applyMiddleware(epicMiddleware, createLogger()));
    epicMiddleware.run(rootEpic);
    return store
}

ReactDOM.render(<Provider store={getStore()}>
    <App />
    <ToastContainer position="bottom-left"/>
</Provider>, document.getElementById('root'));
