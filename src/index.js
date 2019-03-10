import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
// import store from './redux/state';
import store from './redux/redux-store';

 let rerenderEntireTree = () => {
ReactDOM.render(<BrowserRouter>
<App state={store.getState.call(store)} dispatch ={store.dispatch.bind(store)}/>
</BrowserRouter>, document.getElementById('root'));
}
// store.subscribe method gets observer (function) as a parameter
rerenderEntireTree(store.getState.bind(store));
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
