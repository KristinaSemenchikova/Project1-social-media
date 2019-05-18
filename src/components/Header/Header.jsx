import React from 'react';
import s from './Header.module.scss';
import SettingsMenu from './SettingsMenu';
import { NavLink, Redirect } from "react-router-dom";
import logo from '../../Images/logo.png';
import search from '../../Images/search.png';
import login from '../../Images/login.png';
import logout from '../../Images/logout.png';
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
    toLogOut() {
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
                        <a onClick={this.toLogOut}><img alt='logout' src={logout} /></a>
                    </div>)
                    : (<div className={s.buttons}>
                        <a><img alt='login' src={login} /></a>
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

