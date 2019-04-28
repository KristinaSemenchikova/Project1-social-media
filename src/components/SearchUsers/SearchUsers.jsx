import React, { PureComponent } from 'react';
import s from './SearchUsers.module.scss'
import axios from 'axios';
import instance from './../../Service/Service';

class SearchUsers extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
            page: 1
        };
        this.onSelect = this.onSelect.bind(this);
        this.nameFilter = this.nameFilter.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
        this.followUser = this.followUser.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.getFullProfile = this.getFullProfile.bind(this)
    }
    loadUsers() {
        instance.get('/users',
            {
                params: {
                    count: 10,
                    page: this.state.page
                }
            })
            .then(
                result => {
                    console.log(result);
                    let userItems = result.data.items;
                    this.props.setUsers(userItems);
                    this.setState({
                        page: this.state.page + 1
                    })
                }
            );
    }
    clearUsers() {
        this.props.clearUsers()
    }
    componentDidMount() {
        this.loadUsers()
    }
    componentWillUnmount() {
        this.clearUsers()
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
        instance.delete(`/follow/${userID}`)
            .then(result => {
                console.log(result);
                if (result.data.resultCode === 0) {
                    this.props.ufollowUser(userID)
                }
            })
    }
    followUser(e) {
        let userID = +e.target.dataset.userId;
        console.log(userID);
        instance.post(`follow`,{userId : userID })
            .then(result => {
                console.log(result);
                if (result.data.resultCode === 0) {
                    this.props.followUser(userID)
                }
            }
            );
    }
    getFullProfile(e){
        let userID = +e.target.dataset.id;
        console.log(userID);
        instance.get(`/profile/${userID}`)
            .then(result => {
                console.log(result);
            }
            );  
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
                    <span> <a data-id={item.id} onClick = {this.getFullProfile}href='#'>{item.name}</a></span>
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
                <div className={s.users}>
                    {users}
                    <div>
                        <button onClick={this.loadUsers}>More</button>
                    </div>
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