import React from 'react';
import s from './Header.module.scss';
import SettingsMenu from './SettingsMenu';
import { NavLink, Redirect } from "react-router-dom";
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import login from '../../assets/login.png';
import logout from '../../assets/logout.png';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toLogOut = this.toLogOut.bind(this);
    }
    componentDidMount() {
        this.props.getStatus(this.props.userId);
        this.props.isAuth();
        this.props.getProfileInfo(this.props.userId)
    }
    toLogOut(e) {
        e.preventDefault();
        this.props.logOut();
    }
    render() {
        return (<>
            {!this.props.isLogin && <Redirect to="/login" />}
            <header className={s.header}>
                <span className={s.logo} >
                    <img alt='logo' src= {logo} />
                </span>
                {(this.props.isLogin)
                    ? (<div className={s.buttons}>
                        <NavLink to='/search'><img alt='search' src={search} /></NavLink>
                        <SettingsMenu />
                        <a href = '#' onClick={this.toLogOut}><img alt='logout' src={logout} /></a>
                    </div>)
                    : (<div className={s.buttons}>
                        <a href = '#'><img alt='login' src={login} /></a>
                    </div>)
                }
            </header>
        </>
        )
    }

}
Header.propTypes = {
    getStatus: PropTypes.func,
    getProfileInfo: PropTypes.func,
    logOut:  PropTypes.func,
    isLogin: PropTypes.bool,
    isAuth : PropTypes.func,
    userId:  PropTypes.number,
  };
export default Header;

