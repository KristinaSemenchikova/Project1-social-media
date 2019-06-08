import { handleActions, createAction } from "redux-actions";
import instance from "../Service/Service";
import { statuses } from "./statuses";


let initialState = {
    userId: null,
    isLogin: null,
    authData: {
        login: '',
        password: '',
        rememberMe: true
    },
    loginRequest: {
        status: '',
        errorMessage: '',
    },
    captcha: {
        isCaptchaRequired: false,
        captchaUrl: '',
        captchaValue: ''
    }
};
export const setUserId = createAction('SET_USER_ID');

export const setAuthData = createAction('SET_AUTH_DATA');

export const setLoginAC = createAction('SET_LOGIN');
export const setPasswordAC = createAction('SET_PASSWORD');

export const setCaptcha = createAction('SET_RECIEVED_CAPTCHA_URL');
export const setCaptchaValue = createAction('SET_CAPTCHA_VALUE');
export const toggleRememberMe = createAction('TOGGLE_REMEMBERME');

export const loginActionCreator = createAction('LOG_IN');
export const logOutAC = createAction('LOG_OUT');

export const setLoginRequestStatus = createAction('SET_LOGIN_REQUEST_STATUS');

const loginReducer = handleActions({
    [setAuthData.toString()]: (state, {
        payload: authData
    }) => {
        let newState = { ...state, authData: { ...authData } };
        return newState;
    },
    [setLoginAC.toString()]: (state, {
        payload: login
    }) => {
        let newState = { ...state, authData: { ...state.authData } };
        newState.authData.login = login;
        return newState;
    },
    [setUserId.toString()]: (state, {
        payload: userId
    }) => {
        let newState = { ...state, userId: userId };   
        return newState;
    },
    [toggleRememberMe.toString()]: (state) => {
        let newState = { ...state, authData: { ...state.authData } };
        newState.authData.rememberMe = !newState.authData.rememberMe;
        return newState;
    },
    [setPasswordAC.toString()]: (state, {
        payload: password
    }) => {
        let newState = { ...state, authData: { ...state.authData } };
        newState.authData.password = password;
        return newState;
    },
    [loginActionCreator.toString()]: (state, {
        payload: bool
    }) => {
        let newState = { ...state };
        newState.isLogin = bool;
        return newState;
    },
    [setLoginRequestStatus.toString()]: (state, {
        payload: status
    }) => {
        let newState = { ...state, loginRequest : {...state.loginRequest} };
        newState.loginRequest.status = status;
        newState.loginRequest.errorMessage = '';
        return newState;
    },
    [setCaptcha.toString()]: (state, {
        payload: url
    }) => {
        let newState = { ...state, captcha : {...state.captcha} };
        newState.captcha.isCaptchaRequired = true;
        newState.captcha.captchaUrl = url;
        return newState;
    },
    [setCaptchaValue.toString()]: (state, {
        payload: value
    }) => {
        let newState = { ...state, captcha : {...state.captcha} };
        newState.captcha.captchaValue = value;
        return newState;
    },
    [logOutAC.toString()]: (state) => {
        let newState = { ...state };
        newState.isLogin = false;
        return newState;
    }
}, initialState);

export default loginReducer;

export const toLogIn = () => {
    return async (dispatch,getState) => {
        dispatch(setLoginRequestStatus(statuses.IN_PROGRESS));
        let auth = getState().loginPage.authData;
        let captcha = getState().loginPage.captcha.captchaValue;
        try {
            let result = await instance.post('auth/login',
                {
                    email: auth.login,
                    password: auth.password,
                    rememberMe: true,
                    captcha : captcha
                })
            if (result.data.resultCode === 0) {
                dispatch(setLoginRequestStatus(statuses.SUCCESS));
                dispatch(loginActionCreator(true));
            } else if (result.data.resultCode === 1) {
                dispatch(setLoginRequestStatus(statuses.ERROR));
            } else if (result.data.resultCode === 10) {
               let captcha = await instance.get ('security/get-captcha-url');
               dispatch(setCaptcha(captcha.data.url));
                dispatch(setLoginRequestStatus(statuses.ERROR));
            }

        }
        catch (error) {
            dispatch(setLoginRequestStatus(statuses.ERROR));
        }

    }
}
export const toLogOut = () => {
    return async (dispatch) => {
        try {
            let result = await instance.post('auth/logout');
            if (result.data.resultCode === 0) {
                dispatch(logOutAC())
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }
}
export const isAuth = () => {
    return async (dispatch) => {
        try {
            let result = await instance.get('auth/me')
            if (result.data.resultCode === 0) {
                dispatch(loginActionCreator(true));
                dispatch(setUserId(result.data.data.id))
            } else if (result.data.resultCode === 1) {
                dispatch(loginActionCreator(false))
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}



