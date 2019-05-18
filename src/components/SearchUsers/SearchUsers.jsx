import * as React from 'react';
import s from './SearchUsers.module.scss'
import { NavLink } from "react-router-dom";
import Preloader from '../Preloader/Preloader';
import PropTypes from 'prop-types';

class SearchUsers extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
        this.onSelect = this.onSelect.bind(this);
        this.nameFilter = this.nameFilter.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
        this.followUser = this.followUser.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
        this.getFullProfile = this.getFullProfile.bind(this)
    }
    loadUsers() {
        this.props.getUsers(this.state.page)
        this.setState({
            page: this.state.page + 1
        })
    }
    componentDidMount() {
        this.loadUsers()
    }
    componentWillUnmount() {
        this.props.clearUsers()
    }
    onSelect(event) {
        this.props.usersFilter(event.target.value)
    }
    unfollowUser(e) {
        let userID = +e.target.dataset.userId;
        this.props.unfollowUser(userID);
    }
    followUser(e) {
        let userID = +e.target.dataset.userId;
        this.props.followUser(userID);
    }
    getFullProfile(e) {
        let userID = +e.target.dataset.id;
        this.props.getUserInfo(userID)
    }
    nameFilter(event) {
        let name = event.target.value;
        this.props.setFilter(name);
    }
    render() {
        let users = this.props.users.map(item => {
            return <div className={s.userItem} key={item.id}>
                <div className={s.avatarBlock}>
                    {(item.photos.small == null)
                        ? <img className={s.userAvatar} src='https://img.clipartimage.com/ninja-samurai-clipart-free-800_858.png' alt='avatar' />
                        : <img className={s.userAvatar} src={item.photos.small} alt='avatar' />
                    }
                    <span> <NavLink to={`/profile/${item.id}`} data-id={item.id} onClick={this.getFullProfile} >{item.name}</NavLink></span>
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
                {this.props.getUsersRequest.status === 'IN_PROGRESS'
                    ? <div className={s.preloader}><Preloader /></div>
                    : <div className={s.users}>
                        {users}
                        <div>
                            <button onClick={this.loadUsers}>More</button>
                        </div>
                    </div>
                }
                <div className={s.filterItem}>
                    <span> {this.props.users.length} users </span>
                    Search by user's name
                    <input placeholder="User's name" onChange={this.nameFilter} value={this.props.nameFilter}></input>
                    Search by followed users
                    <select onChange={this.onSelect}>
                        <option value='all'>All users</option>
                        <option value='followed'>Followed</option>
                        <option value='unfollowed'>Unfollowed</option>
                    </select>
                </div>
            </div>
        )
    }
}
SearchUsers.propTypes = {
    users : PropTypes.array,
    nameFilter :PropTypes.string,
    followUser : PropTypes.func,
    unfollowUser : PropTypes.func,
    setFilter : PropTypes.func,
    getUsers : PropTypes.func,
    clearUsers : PropTypes.func,
    usersFilter :  PropTypes.func,
    getUserInfo : PropTypes.func,
    getUsersRequest : PropTypes.object
  };
export default SearchUsers;

