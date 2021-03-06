import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import {sendMessage} from './redux/state';
import {updateNewMessage} from './redux/state';


export let rerenderEntireTree = (state) => {
ReactDOM.render(<BrowserRouter><App state={state} addPost={addPost} updateNewPostText = {updateNewPostText} sendMessage = {sendMessage} updateNewMessage = {updateNewMessage}/></BrowserRouter>, document.getElementById('root'));
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
                       