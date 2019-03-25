import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import Login from './components/LoginLogout/LoginPage';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
      <Switch>
        <Route path='/dialogs' render={() => <DialogsContainer/>} />
        <Route path='/profile' render={() => <Profile/>} />
        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <SettingsContainer />} />
        <Route path = '/login' render = {() => <Login/>}/>
        </Switch>
      </div>
    </div>
  );
}


export default App;
