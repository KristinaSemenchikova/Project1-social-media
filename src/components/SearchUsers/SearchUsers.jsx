import React, { useState, useEffect } from 'react';
import s from './SearchUsers.module.scss'

// class SearchUsers extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filter: 'all',
//             currentShowUsers: this.props.users
//         };
//         this.onSelect = this.onSelect.bind(this)
//     }
//     onSelect(event) {
//         switch (event.target.value) {
//             case 'all':
//                 this.setState({
//                     filter: event.target.value,
//                     currentShowUsers: this.props.users
//                 });
//                 break;
//             case 'true':
//                let  filteredUsers = this.props.users.filter(user => user.isFollowed === true);
//                 this.setState({
//                     filter: event.target.value,
//                     currentShowUsers: filteredUsers
//                 });
//                 break;
//             case 'false':
//                 filteredUsers = this.props.users.filter(user => user.isFollowed === false);
//                 this.setState({
//                     filter: event.target.value,
//                     currentShowUsers: filteredUsers
//                 });
//                 break;
//         }
// }
// renderUsers() {
//     return this.state.currentShowUsers.map(item => {
//         return <div className={s.userItem} key={item.id}>
//             <div className={s.avatarBlock}>
//                 <img className={s.userAvatar} src={item.avatar} alt='avatar' />
//                 <span><b>{item.fullName}</b></span>
//                 <div className={s.descriptionBlock}>
//                     <span>{item.location.country},</span>
//                     <span>{item.location.city}</span>

//                 </div>
//             </div>
//             <span>"{item.status}"</span>
//             {(item.isFollowed)
//                 ? <button className={s.buttonFollow} onClick={() => this.props.unfollowUser(item.id)}>Unfollow</button>
//                 : <button className={s.buttonFollow} onClick={() => this.props.followUser(item.id)}> Follow</button>}
//         </div >
//     }
//     )
// }
// render() {
//     return (
//         <div className={s.wrapper}>
//             <div>
//                 {this.renderUsers()}
//             </div>
//             <div className={s.filterItem}>
//                 Filter parameters
//                     <select onChange={this.onSelect}>
//                     <option value='all'>All users</option>
//                     <option value='true'>Followed</option>
//                     <option value='false'>Unfollowed</option>
//                 </select>

//                 Region
//                     <select>
//                     <option>Belarus</option>
//                     <option>USA</option>
//                     <option>Georgia</option>
//                 </select>
//             </div>
//         </div>
//     )
// }
// }
// export default SearchUsers;

class SearchUsers extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
        };
        this.onSelect = this.onSelect.bind(this)
    }
    onSelect(event) {
        switch (event.target.value) {
            case 'all':
                this.setState({
                    filter: 'all'
                });
                break;
            case 'true':
                this.setState({
                    filter: true,
                });
                break;
            case 'false':
                this.setState({
                    filter: false,
                });
                break;
        }
    }
    render() {
        let filteredUsers;
        this.state.filter === 'all' ? filteredUsers = this.props.users.map(item => item) : filteredUsers = this.props.users.filter(user => user.isFollowed === this.state.filter);  
        let users = filteredUsers.map(item => {
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
                    ? <button className={s.buttonFollow} onClick={() => this.props.unfollowUser(item.id)}>Unfollow</button>
                    : <button className={s.buttonFollow} onClick={() => this.props.followUser(item.id)}> Follow</button>}
            </div >
        }
        )
        return (
            <div className={s.wrapper}>
                <div>
                    {users}
                </div>
                <div className={s.filterItem}>
                    Filter parameters
                    <select onChange={this.onSelect}>
                        <option value='all'>All users</option>
                        <option value='true'>Followed</option>
                        <option value='false'>Unfollowed</option>
                    </select>

                    Region
                    <select>
                        <option>Belarus</option>
                        <option>USA</option>
                        <option>Georgia</option>
                    </select>
                </div>
            </div>
        )
    }
}
export default SearchUsers;