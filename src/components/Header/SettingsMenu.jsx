import React, { useState } from 'react';
import styled , { keyframes } from 'styled-components';
import { NavLink } from "react-router-dom";

const Menu = styled.div`
display: none;
white-space: nowrap;
position: absolute;
top: 45px;
right: 70px;
background: rgb(236, 240, 243);
z-index: 1;
border-radius: 5px;
padding: 0;
box-shadow: 0 1px 3px rgba(0,0,0,.1);
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 5px 10px 5px 10px;
  font-size: smaller;
`;

const Link = styled(NavLink)`
   text-decoration: none;
   color: #ad7cfc;

   &.active {
    color: rgb(68, 0, 255);
  }
`;

const SettingsMenu = () => {
    let settingsMenu = React.createRef();
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    let openMenu = () => {
        if (isOpenMenu == false) {
            setIsOpenMenu(true);
            settingsMenu.current.style.display = 'block';
        } else {
            setIsOpenMenu(false);
            settingsMenu.current.style.display = 'none';
        }
    };

    return (
        <>
            <a href ='#' onClick={openMenu}>
                <img alt='setting' src="https://img.icons8.com/windows/52/000000/settings.png" />
            </a>
            <Menu ref={settingsMenu}>
                <Ul>
                    <li> <Link to='/profile'> My page </Link></li>
                    <li> <Link to='/settings'> Edit profile</Link></li>
                    <li> <Link to='/settings'> Settings</Link></li>
                </Ul>
            </Menu>
        </>
    )
}

export default SettingsMenu;