import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import {Route, Switch } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import AlbumContainer from './components/Profile/ProfileAlbum/AlbumContainer';
import SearchUsersContainer from './components/SearchUsers/SearchUsersContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import LoginPageContainer from './components/LoginLogout/LoginPageContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
      <Switch>
        <Route path='/dialogs' render={() => <DialogsContainer/>} />
        <Route path='/profile' render={() => <Profile/>} />
        <Route path='/friends' render={() => <FriendsContainer/>} />
        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <SettingsContainer />} />
        <Route path = '/login' render = {() => <LoginPageContainer/>} />
        <Route path = '/album' render = {() => <AlbumContainer/>} />
        <Route path = '/search' render = {() => <SearchUsersContainer/>} />
        </Switch>
      </div>
    </div>
  );
}


export default App;
