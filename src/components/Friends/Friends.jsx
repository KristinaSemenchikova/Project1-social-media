import React,  { Component } from 'react';
import s from './Friends.module.scss';
import axios from 'axios';

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

class Friends extends React.PureComponent {
    constructor(props) {
        super(props);
        this.unfollowUser = this.unfollowUser.bind(this);
        this.followUser = this.followUser.bind(this);
    }
    unfollowUser(e) {
        this.props.unfollowUser(+e.target.dataset.userId)
    }
    followUser(e) {
        let userID = +e.target.dataset.userId;
        axios.post('https://social-network.samuraijs.com/api/1.0/follow?',
            {
                params: {
                    userId: userID,
                }
            })
            .then(this.props.followUser(userID));       
    }
    render() {
        let users = this.props.users.map(item => {
            return <div className={s.userItem} key={item.id}>
                <div className={s.avatarBlock}>
                    {(item.photos.small == null)
                        ? <img className={s.userAvatar} src='https://img.clipartimage.com/ninja-samurai-clipart-free-800_858.png' alt='avatar' />
                        : <img className={s.userAvatar} src={item.photos.small} alt='avatar' />
                    }
                    <span><b>{item.name}</b></span>
                </div>
                <span>{item.status}</span>
                {(item.followed)
                    ? <button data-user-id={item.id} className={s.buttonFollow} onClick={this.unfollowUser}>Unfollow</button>
                    : <button data-user-id={item.id} className={s.buttonFollow} onClick={this.followUser}> Follow</button>
                }
            </div >
        }
        )
        return (
            <div className={s.wrapper}>
                <div>
                    {users}
                </div>
            </div>
        )
    }
}
export default Friends;