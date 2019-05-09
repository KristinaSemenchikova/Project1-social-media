import { handleActions, createAction } from "redux-actions";
import instance from "../Service/Service";

let initialState = {
    followUserRequest: {
        error: false,
        success: false,
    },
    unfollowUserRequest: {
        error: false,
        success: false,
    },
    getUsersRequest: {
        sending: false,
        error: false,
        success: false,
    },
    users: [],
    usersFilter: 'all',
    nameFilter: ''
};

export const followUserActionCreator = createAction('FOLLOW_USER');
export const unfollowUserActionCreator = createAction('UNFOLLOW_USER');

export const clearUsersAC = createAction('CLEAR_USERS');
export const setFilterActionCreator = createAction('SET_FILTER');
export const usersFilterAC = createAction('USERS_FILTER');

export const sendingGetUsersRequest = createAction('SENDING_GET_USERS_REQUEST');
export const getUsersRequestError = createAction('GET_USERS_REQUEST_ERROR');
export const getUsersRequestSuccess = createAction('GET_USERS_REQUEST_SUCCESS');
export const setUsersActionCreator = createAction('SET_USERS');


const usersReducer = handleActions({

    [setUsersActionCreator.toString()]: (state, {
        payload: users
    }) => {
        let newState = { ...state, users: [...state.users, ...users] };
        return newState;
    },
    [sendingGetUsersRequest.toString()]: (state, {
        payload: bool
    }) => {
        let newState = {
            ...state, getUsersRequest: {
                sending: bool
            }
        };
        return newState;
    },
    [getUsersRequestError.toString()]: (state) => {
        let newState = {
            ...state, getUsersRequest: {
                error: true,
                success: false,
            }
        };
        return newState;
    },
    [getUsersRequestSuccess.toString()]: (state) => {
        let newState = {
            ...state, getUsersRequest: {
                error: false,
                success: true,
            }
        };
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
        dispatch(sendingGetUsersRequest(true));
        try {
            let result = await instance.get('/users',
                {
                    params: {
                        count: 10,
                        page: page
                    }
                })
            if (result.status === 200) {
                dispatch(sendingGetUsersRequest(false));
                dispatch(getUsersRequestSuccess());
                dispatch(setUsersActionCreator(result.data.items));
            } else if (result.error !== null) {
                dispatch(getUsersRequestError());
            }
        } catch (error) {
            alert(error.message);
            dispatch(getUsersRequestError());
        }

    }
}

export const followUser = (userId) => {
    return async (dispatch) => {
        try {
            let result = await instance.post(`follow`, { userId: userId })
            if (result.data.resultCode === 0) {
                dispatch(followUserActionCreator(userId))
            }
        } catch (error) {
            alert(error.message);
        }
    }
};
export const unfollowUser = (userId) => {
    return async (dispatch) => {
        try {
            let result = await instance.delete(`/follow/${userId}`);
            if (result.data.resultCode === 0) {
                dispatch(unfollowUserActionCreator(userId))
            }
        } catch (error) {
            alert(error.message);
        }
    }
}
