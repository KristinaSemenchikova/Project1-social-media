import React from 'react';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import { Route, Switch, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import AlbumContainer from './components/Profile/ProfileAlbum/AlbumContainer';
import SearchUsersContainer from './components/SearchUsers/SearchUsersContainer';
import LoginPageContainer from './components/LoginLogout/LoginPageContainer';
import EditProfileContainer from './components/EditProfile/EditProfileContainer';

const App = (props) => {

  if (props.location.pathname === '/login') {
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='app-wrapper-content'>
              <Route path='/login' render={() => <LoginPageContainer />} />
        </div>
      </div>)
  }
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <>
        <Nav />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' render={() => <Profile />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile:id?' render={() => <Profile />} />
            <Route path='/news' render={() => <NewsContainer />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <SettingsContainer />} />
            <Route path='/album' render={() => <AlbumContainer />} />
            <Route path='/search' render={() => <SearchUsersContainer />} />
            <Route path='/edit' render={() => <EditProfileContainer />} />
          </Switch>
        </div></>
    </div>
  );
}

export default withRouter(App);
