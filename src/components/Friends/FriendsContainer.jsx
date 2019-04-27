import React from 'react';
import { connect } from 'react-redux';
import {users} from '../../redux/selectors';
import { followUserActionCreator, unfollowUserActionCreator, setUsersActionCreator} from '../../redux/users-reducer';
import Friends from './Friends';

const FriendsContainer = (props) => {
    return (
        <Friends
        users = {props.users}
        followUser = {props.followUser}
        unfollowUser = {props.unfollowUser}
         />
    )
}
const mapStateToProps = state => {
    return {
        users: users(state),
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FriendsContainer);