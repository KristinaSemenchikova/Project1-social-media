import { handleActions, createAction } from "redux-actions";

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
        name: 'Soft Kitty',
        birthDate: '08.08.1998',
        city: 'London',
        contact: '+44 810 234 678 98 33',
    },
    newName: '',
    newBirthDate: '',
    newCity: '',
    newContact: '',
};

export const addPostActionCreator = createAction('ADD_POST');
export const updatePostActionCreator = createAction('UPDATE_NEW_POST_TEXT');
export const addStatusActionCreator = createAction('ADD_STATUS');
export const updateStatusActionCreator = createAction('UPDATE_STATUS_TEXT');
export const likePostActionCreator = createAction('LIKE_POST');
export const dislikePostActionCreator = createAction('DISLIKE_POST');

export const changeNameActionCreator = createAction('CHANGE_NAME');
export const changeBirthActionCreator = createAction('CHANGE_BIRTH');
export const changeCityActionCreator = createAction('CHANGE_CITY');
export const changeContactActionCreator = createAction('CHANGE_CONTACT');
export const addInfoActionCreator = createAction('ADD_INFO');


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
        let newStatePost = newState.posts.filter((item) => item.id == id);
        newStatePost[0].likes += 1;
        newStatePost[0].isLiked = true;
        return newState;
    },

    [dislikePostActionCreator.toString()]: (state, { payload: id }) => {
        let newState = {
            ...state, posts: [...state.posts]
        };
        let newStatePost = newState.posts.filter((item) => item.id == id);
        newStatePost[0].likes -= 1;
        newStatePost[0].isLiked = false;
        return newState;
    },

    [changeNameActionCreator.toString()]: (state, { payload: text }) => {
        let newState = { ...state, newName: text };
        return newState;
    },

    [changeBirthActionCreator.toString()]: (state, { payload: text }) => {
        let newState = { ...state, newBirthDate: text };
        return newState;
    },

    [changeCityActionCreator.toString()]: (state, { payload: text }) => {
        let newState = { ...state, newCity: text };
        return newState;
    },

    [changeContactActionCreator.toString()]: (state, { payload: text }) => {
        let newState = { ...state, newContact: text };
        return newState;
    },

    [addInfoActionCreator.toString()]: (state) => {
        let newState = { ...state, profileInfo: { ...state.profileInfo } };
        if (!(/\S/.test(state.newName)) && state.newName.length < 5) {
            newState.profileInfo.name = state.profileInfo.name
        }
        else {
            newState.profileInfo.name = state.newName
        };
        if (!(/\S/.test(state.newBirthDate)) && state.newBirthDate.length < 5) {
            newState.profileInfo.birthDate = state.profileInfo.birthDate
        }
        else {
            newState.profileInfo.birthDate = state.newBirthDate
        };
        if (!(/\S/.test(state.newCity)) && state.newCity.length < 3) {
            newState.profileInfo.city = state.profileInfo.city
        }
        else {
            newState.profileInfo.city = state.newCity
        };
        if (!(/\S/.test(state.newContact)) && state.newContact.length < 5) {
            newState.profileInfo.contact = state.profileInfo.contact
        }
        else {
            newState.profileInfo.contact = state.newContact
        };
        return newState;
    }
}, initialState);

export default profileReducer;
