import React from 'react';
import { connect } from 'react-redux';
import SearchUsers from './SearchUsers';
import {users, nameFilter,searchUserByName} from './../../redux/selectors';
import { followUserActionCreator, unfollowUserActionCreator, setUsersActionCreator,setFilterActionCreator, clearUsersAC} from '../../redux/users-reducer';

const SearchUsersContainer = (props) => {
    return (
        <SearchUsers 
        users = {props.users}
        nameFilter = {props.nameFilter}
        followUser = {props.followUser}
        unfollowUser = {props.unfollowUser}
        setFilter = {props.setFilter}
        setUsers = {props.setUsers}
        clearUsers = {props.clearUsers}
         />
    )
}
const mapStateToProps = state => {
    return {
        // users: users(state),
        users: searchUserByName(state),
        nameFilter: nameFilter(state)    
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
        setFilter: (name) => {
            dispatch(setFilterActionCreator(name))
        },
        clearUsers: () => {
            dispatch(clearUsersAC())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchUsersContainer);