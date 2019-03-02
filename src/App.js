import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav sidebar = {props.state.sidebar}/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage} />} />
        <Route path='/profile' render={() => <Profile profile={props.state.profilePage} addPost = {props.addPost}/>} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}


export default App;
