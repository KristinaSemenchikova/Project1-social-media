import { handleActions, createAction } from "redux-actions";
import instance, { axiosUpload } from "../Service/Service";

let initialState = {
    posts: [
        { id: 1, message: 'Hi,sweety', likes: 10, isLiked: false },
    ],
    photos: ['https://pp.userapi.com/c849224/v849224463/1445b1/JmXx42sIXe8.jpg',
        'https://pp.userapi.com/c845416/v845416462/1a9436/VeTZRXDWGug.jpg',
        'https://pp.userapi.com/c846217/v846217810/18cb64/EZr0kU2S-Lg.jpg',
        'https://pp.userapi.com/c639226/v639226781/3a1b/wN6vYbtvB6c.jpg',
        'https://pp.userapi.com/c852016/v852016106/8c407/06xlRxvkVV8.jpg',
        'https://pp.userapi.com/c635100/v635100700/2ad7d/qlKjSHHdBDc.jpg',
        'https://pp.userapi.com/c845520/v845520822/12b348/lYTDXTByG_A.jpg'],
    newPostText: 'Anything meow?',
    statusText: 'Change status',
    profileInfo: {
        userId : 1050,
        fullName: '',
        aboutMe: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        contacts: {
            facebook: "facebook.com",
            github: "github.com",
            instagram: "instagram.com",
            mainLink: 'link',
            twitter: 'twitter',
            vk: "vk.com",
            website: 'web',
            youtube: 'youtube'
        },
        photos: {
            large: '',
            small: ''
        }
    },
    photo: null,
    setProfileInfoRequest: {
        sending: false,
        success: false,
        error: false
    },
    userInfo: null
};

export const addPostActionCreator = createAction('ADD_POST');
export const updatePostActionCreator = createAction('UPDATE_NEW_POST_TEXT');
export const addStatusActionCreator = createAction('ADD_STATUS');
export const updateStatusActionCreator = createAction('UPDATE_STATUS_TEXT');
export const likePostActionCreator = createAction('LIKE_POST');
export const dislikePostActionCreator = createAction('DISLIKE_POST');

export const sendingSetProfileRequestAC = createAction('SENDING_SET_REQUEST');
export const setProfilerequestErrorAC = createAction('SET_REQUEST_ERROR_');
export const setProfilerequestSuccessAC = createAction('SET_REQUEST_SUCCESS');

export const setUserInfoAC = createAction('SET_USER_INFO');
export const setUserPhoto = createAction('SET_USER_PHOTO');
export const setProfileInfoAC = createAction('SET_PROFILE_INFO');



const profileReducer = handleActions({

    [addPostActionCreator.toString()]: (state) => {
        let newState;
        let newId = state.posts[0].id + 1;
        if (/\S/.test(state.newPostText)) {
            let newPost = { id: newId, message: state.newPostText, likes: 9, isLiked: false };
            newState = {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            }
            return newState;
        } else {
            return state;
        }
    },
    [sendingSetProfileRequestAC.toString()]: (state, { payload: bool }) => {
        let newState = {
            ...state, setProfileInfoRequest: {
                ...state.setProfileInfoRequest
            }
        };
        newState.setProfileInfoRequest.sending = bool;
        return newState;
    },
    [setProfilerequestSuccessAC.toString()]: (state) => {
        let newState = {
            ...state, setProfileInfoRequest: {
                ...state.setProfileInfoRequest
            }
        };
        newState.setProfileInfoRequest.success = true;
        newState.setProfileInfoRequest.error = false;
        return newState;
    },
    [setProfilerequestErrorAC.toString()]: (state) => {
        let newState = {
            ...state, setProfileInfoRequest: {
                ...state.setProfileInfoRequest
            }
        };
        newState.setProfileInfoRequest.success = false;
        newState.setProfileInfoRequest.error = true;
        return newState;
    },
    [updatePostActionCreator.toString()]: (state, { payload: text }) => {
        let newState = { ...state, newPostText: text }
        return newState;
    },

    [addStatusActionCreator.toString()]: (state) => {
        if (/\S /.test(state.statusText)) {
            let newState = { ...state, statusText: [state.statusText] };
            return newState;
        } else {
            return state;
        }
    },

    [updateStatusActionCreator.toString()]: (state, { payload: text }) => {
        return { ...state, statusText: text }
    },

    [likePostActionCreator.toString()]: (state, { payload: id }) => {
        let newState = {
            ...state, posts: [...state.posts]
        };
        let newStatePost = newState.posts.filter((item) => item.id === id);
        newStatePost[0].likes += 1;
        newStatePost[0].isLiked = true;
        return newState;
    },

    [dislikePostActionCreator.toString()]: (state, { payload: id }) => {
        let newState = {
            ...state, posts: [...state.posts]
        };
        let newStatePost = newState.posts.filter((item) => item.id === id);
        newStatePost[0].likes -= 1;
        newStatePost[0].isLiked = false;
        return newState;
    },
    [setUserInfoAC.toString()]: (state, { payload: userInfo }) => {
        return { ...state, userInfo: userInfo }
    },
    [setUserPhoto.toString()]: (state, { payload: photo }) => {
        let newState = { ...state };
        newState.photo = photo;
        return newState;
    },
    [setProfileInfoAC.toString()]: (state, { payload: values }) => {
        let newState = { ...state };
        newState.profileInfo = {
            aboutMe: values.aboutMe,
            contacts: {
                facebook: values.facebook,
                github: values.github,
                instagram: values.instagram,
                mainLink: values.mail,
                twitter: values.twitter,
                vk: values.vk,
                website: values.website,
                youtube: values.youtube
            },
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription,
            fullName: values.fullName,
            photos: {
                large: values.photos.large,
                small: values.photos.small
            }
        };
        return newState;
    },
}, initialState);

export default profileReducer;

export const getUserInfo = (id) => {
    return async (dispatch) => {
        try {
            let result = await instance.get(`/profile/${id}`);
            console.log(result);
            dispatch(setUserInfoAC(result))
        } catch (error) {
            alert(error.message)
        }
    }
}
export const setStatus = (status) => {
    return async (dispatch) => {
        try {
            let result = await instance.put('profile/status', {
                status: status
            });
            if (result.data.resultCode === 0) dispatch(addStatusActionCreator())
        } catch (error) {
            console.log(error.message)
        }
    }
}
export const getStatus = () => {
    return async (dispatch) => {
        try {
            let result = await instance.get('profile/status/1050');
            console.log(result);
            dispatch(addStatusActionCreator())
        } catch (error) {
            console.log(error.message)
        }
    }
}
export const uploadPhoto = (photo) => {
    return async (dispatch) => {
        try {
            let result = await axiosUpload.put('profile/photo', photo);
            console.log(result)
        } catch (error) {
            alert(error.message)
        }
    }
}

export const setProfileInfo = (values) => {
    debugger
    return async (dispatch) => {
        try {
            dispatch(sendingSetProfileRequestAC(true));
            let result = await instance.put('profile',
                {

                    "aboutMe": values.aboutMe,
                    "contacts": {
                        facebook: values.facebook,
                        github: values.github,
                        instagram: values.instagram,
                        mainLink: values.mail,
                        twitter: values.twitter,
                        vk: values.vk,
                        website: values.website,
                        youtube: values.youtube
                    },
                    "lookingForAJob": values.lookingForAJob,
                    "lookingForAJobDescription": values.lookingForAJobDescription,
                    "fullName": values.fullName
                }
            );
            dispatch(sendingSetProfileRequestAC(false));
            if (result.data.resultCode === 0) {
                dispatch(setProfilerequestSuccessAC());
                console.log(result.data)
            } else if (result.data.resultCode === 1) {
                dispatch(setProfilerequestErrorAC());
            }
        } catch (error) {
            alert(error.message)
        }
    }
}
export const getProfileInfo = (id) => {
    debugger
    return async (dispatch) => {
        try {
            let result = await instance.get(`/profile/${id}`);
            if (result.status === 200) {
                dispatch(setProfileInfoAC(result.data))
            }  
        } catch (error) {
            alert(error.message)
        }
    }
}