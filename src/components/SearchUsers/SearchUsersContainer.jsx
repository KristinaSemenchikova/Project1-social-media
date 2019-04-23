import React from 'react';
import { connect } from 'react-redux';
import SearchUsers from './SearchUsers';
import {searchUsersPageSelector} from './../../redux/selectors';
import { followUserActionCreator, unfollowUserActionCreator, setUsersActionCreator} from '../../redux/users-reducer';

const SearchUsersContainer = (props) => {
    return (
        <SearchUsers 
        users = {props.searchUsers}
        followUser = {props.followUser}
        unfollowUser = {props.unfollowUser}
         />
    )
}
const mapStateToProps = state => {
    return {
        searchUsers: searchUsersPageSelector(state)
    }
};
const mapDispatchToProps = dispatch => {
    return {
        followUser : (id) => {
            dispatch(followUserActionCreator(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowUserActionCreator(id))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchUsersContainer);