import { handleActions, createAction } from "redux-actions";

let initialState = {
    isLogin: false,
     authData: {
      login: '',
      password : ''
    },
    users: [],
    nameFilter: ''
};

export const followUserActionCreator = createAction('FOLLOW_USER');
export const unfollowUserActionCreator = createAction('UNFOLLOW_USER');
export const setUsersActionCreator = createAction('SET_USERS');
export const clearUsersAC = createAction('CLEAR_USERS');
export const setFilterActionCreator = createAction('SET_FILTER');
export const loginActionCreator = createAction('LOG_IN');
export const logOutAC = createAction('LOG_OUT');
export const setLoginAC = createAction('SET_LOGIN');
export const setPasswordAC = createAction('SET_PASSWORD');

const usersReducer = handleActions({

    [setUsersActionCreator.toString()]: (state, {
        payload: users
    }) => {
        let newState = { ...state, users: [...state.users,...users] };
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
    [setLoginAC.toString()]: (state, {
        payload: login
    }) => {
        let newState = { ...state,authData: {...state.authData }  };
        newState.authData.login = login;
        return newState;
    },
    [setPasswordAC.toString()]: (state, {
        payload: password
    }) => {
        let newState = { ...state,authData: {...state.authData }  };
        newState.authData.password = password;
        return newState;
    },
    [loginActionCreator.toString()]: (state) => {
        let newState = { ...state };
        newState.isLogin = true;
        return newState;
    },
    [logOutAC.toString()]: (state) => {
        let newState = { ...state };
        newState.isLogin = false;
        return newState;
    }
}, initialState);

export default usersReducer;

