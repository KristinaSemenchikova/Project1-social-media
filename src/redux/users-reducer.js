import { handleActions, createAction } from "redux-actions";
import instance from "../api/axiosInstance";
import { statuses } from "./statuses";

let initialState = {
    followUserRequestStatus: null,
    unfollowUserRequestStatus: null,
    getUsersRequest: {
        status: '',
        errorMessage: null
    },
    users: [],
    usersTotalCount : null,
    usersFilter: 'all',
    nameFilter: ''
};

export const followUserActionCreator = createAction('FOLLOW_USER');
export const unfollowUserActionCreator = createAction('UNFOLLOW_USER');

export const clearUsersAC = createAction('CLEAR_USERS');
export const setFilterActionCreator = createAction('SET_FILTER');
export const usersFilterAC = createAction('USERS_FILTER');

export const setUsersRequestStatus = createAction('SET_GET_USERS_REQUEST_STATUS');

export const setUsersActionCreator = createAction('SET_USERS');


const usersReducer = handleActions({

    [setUsersActionCreator.toString()]: (state, {
        payload: usersData
    }) => {
        let newState = { ...state, 
            users: [ ...usersData.items],
            usersTotalCount : usersData.totalCount
         };
        return newState;
    },
    [setUsersRequestStatus.toString()]: (state, {
        payload: status
    }) => {
        let newState = { ...state , getUsersRequest: {...state.getUsersRequest}};
        newState.getUsersRequest.status = status;
        return newState;
    },
    [clearUsersAC.toString()]: (state) => {
        let newState = { ...state, users: [] };
        return newState;
    },
    [followUserActionCreator.toString()]: (state, {
        payload: id
    }) => {
        let newState = { ...state, users: state.users.map(item => item) };
        let user = newState.users.filter(item => item.id === id);
        user[0].followed = true;
        return newState;
    },
    [unfollowUserActionCreator.toString()]: (state, {
        payload: id
    }) => {
        let newState = { ...state, users: [...state.users] };
        let user = newState.users.filter(item => item.id === id);
        user[0].followed = false;
        return newState;
    },
    [setFilterActionCreator.toString()]: (state, {
        payload: name
    }) => {
        let newState = { ...state };
        newState.nameFilter = name;
        return newState;
    },
    [usersFilterAC.toString()]: (state, {
        payload: filter
    }) => {
        let newState = { ...state };
        newState.usersFilter = filter;
        return newState;
    },

}, initialState);

export default usersReducer;

export const getUsers = (page) => {
    return async (dispatch) => {
        dispatch(setUsersRequestStatus(statuses.IN_PROGRESS));
        try {
            let result = await instance.get('/users',
                {
                    params: {
                        count: 10,
                        page: page
                    }
                })
            if (result.status === 200) {
                dispatch(setUsersRequestStatus(statuses.SUCCESS));
                console.log(result);
                dispatch(setUsersActionCreator(result.data));
            } else if (result.error !== null) {
                dispatch(setUsersRequestStatus(statuses.ERROR));
            }
        } catch (error) {
            console.log(error.message);
            dispatch(setUsersRequestStatus(statuses.ERROR));
        }

    }
}

export const followUser = (userId) => {
    debugger
    return async (dispatch) => {
        try {
            let result = await instance.post(`follow/${userId}`)
            if (result.status === 200) {
                dispatch(followUserActionCreator(userId))
            }
        } catch (error) {
            console.log(error.message);
        }
    }
};
export const unfollowUser = (userId) => {
    return async (dispatch) => {
        try {
            let result = await instance.delete(`follow/${userId}`);
            if (result.status === 200) {
                dispatch(unfollowUserActionCreator(userId))
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}
