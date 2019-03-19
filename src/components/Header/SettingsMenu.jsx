import React, { useState } from 'react';
import s from './Header.module.css';

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
            <div className={s.settingsMenu} ref={settingsMenu}>
                <ul>
                    <li> My page</li>
                    <li> Edit profile</li>
                    <li> Settings</li>
                </ul>
            </div>
        </>
    )
}

export default SettingsMenu;