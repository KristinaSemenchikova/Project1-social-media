import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import { BrowserRouter, Route } from 'react-router-dom';
import { addPost } from './redux/state';
import {updateNewPostText} from './redux/state';
import {sendMessage} from './redux/state';
import {updateNewMessage} from './redux/state';
import {subscribe} from './redux/state';
import {store} from './redux/state';

 let rerenderEntireTree = () => {
ReactDOM.render(<BrowserRouter>
<App state={state} addPost={store.addPost} updateNewPostText = {store.updateNewPostText} 
sendMessage = {store.sendMessage} updateNewMessage = {store.updateNewMessage}/>
</BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(state);
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
