import React from 'react';
import PropTypes from 'prop-types';
import s from './SearchUsers.module.scss'


const SearchUsers = (props) => {
    let user = props.users.map(item => {
        return <div className={s.userItem} key={item.id}>
            <div className={s.avatarBlock}>
                <img className={s.userAvatar} src={item.avatar} alt='avatar' />
                <span><b>{item.fullName}</b></span>
                <div className={s.descriptionBlock}>
                    <span>{item.location.country},</span>
                    <span>{item.location.city}</span>
                   
                </div>
            </div>
            <span>"{item.status}"</span>
            {(item.isFollowed)
                ? <button className={s.buttonFollow} onClick={() => props.unfollowUser(item.id)}>Unfollow</button>
                : <button className={s.buttonFollow} onClick={() => props.followUser(item.id)}> Follow</button>}              
        </div >
    });
return (
    <div className={s.wrapper}>
        <div>
            {user}
        </div>
        <div className={s.filterItem}>
            Filter parameters
                    <select>
                <option>Followed</option>
                <option>Unfollowed</option>
            </select>
            Region
                    <select>
                <option>Belarus</option>
                <option>Russia</option>
            </select>
        </div>
    </div>
)
};
export default SearchUsers;