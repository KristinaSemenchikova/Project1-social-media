import React, { PureComponent } from 'react';
import s from './SearchUsers.module.scss'
import axios from 'axios';

class SearchUsers extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
        };
        this.onSelect = this.onSelect.bind(this);
        this.nameFilter = this.nameFilter.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
        this.followUser = this.followUser.bind(this);
        this.loadUsers = this.loadUsers.bind(this)
    }
    loadUsers() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(
                result => {
                    let userItems = result.data.items;
                    this.props.setUsers(userItems)
                }
            );
    }
    componentDidMount() {
            this.loadUsers()
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
    unfollowUser(e) {
        let userID = +e.target.dataset.userId;
        axios.delete('https://social-network.samuraijs.com/api/1.0/follow?',
            {
                params: {
                    userId: userID,
                }
            })
            .then(this.props.followUser(userID))
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
    nameFilter(event) {
        let name = event.target.value;
        this.props.setFilter(name);
    }
    render() {
        let filteredUsers;
        this.state.filter === 'all' ? filteredUsers = this.props.users.map(item => item) : filteredUsers = this.props.users.filter(user => user.followed === this.state.filter);
        let users = filteredUsers.map(item => {
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
                <div className={s.filterItem}>
                    <span> {this.props.users.length} users </span>
                    Search by user's name
                    <input placeholder="User's name" onChange={this.nameFilter} value={this.props.nameFilter}></input>
                    Search by followed users
                    <select onChange={this.onSelect}>
                        <option value='all'>All users</option>
                        <option value='true'>Followed</option>
                        <option value='false'>Unfollowed</option>
                    </select>
                    Load more users
                    <button>More</button>
                </div>
            </div>
        )
    }
}
export default SearchUsers;


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