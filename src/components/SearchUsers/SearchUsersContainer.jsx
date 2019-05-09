import React from 'react';
import { connect } from 'react-redux';
import SearchUsers from './SearchUsers';
import {nameFilter,searchUserByName} from './../../redux/selectors';
import { getUsers,setFilterActionCreator, clearUsersAC, usersFilterAC, followUser, unfollowUser} from '../../redux/users-reducer';
import { getUserInfo } from '../../redux/profile-reducer';

const SearchUsersContainer = (props) => {
    return (
        <SearchUsers 
        users = {props.users}
        nameFilter = {props.nameFilter}
        followUser = {props.followUser}
        unfollowUser = {props.unfollowUser}
        setFilter = {props.setFilter}
        getUsers = {props.getUsers}
        clearUsers = {props.clearUsers}
        usersFilter = {props.usersFilter}
        getUserInfo = {props.getUserInfo}
         />
    )
}
const mapStateToProps = state => {
    return {
        users: searchUserByName(state),
        nameFilter: nameFilter(state)    
    }
};
const mapDispatchToProps = dispatch => {
    return {
        followUser : (id) => {
            dispatch(followUser(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowUser(id))
        },
        getUsers: (page) => {
            dispatch(getUsers(page))
        },
        setFilter: (name) => {
            dispatch(setFilterActionCreator(name))
        },
        clearUsers: () => {
            dispatch(clearUsersAC())
        },
        usersFilter: (filter)=> {
            dispatch(usersFilterAC(filter))
        },
        getUserInfo: (id) => {
            dispatch(getUserInfo(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchUsersContainer);