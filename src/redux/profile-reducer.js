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

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_STATUS = 'ADD-STATUS';
const UPDATE_STATUS_TEXT = 'UPDATE-STATUS-TEXT';
const LIKE_POST = 'LIKE-POST';
const DISLIKE_POST = 'DISLIKE-POST';
const CHANGE_NAME = 'CHANGE-NAME';
const CHANGE_BIRTH = 'CHANGE-BIRTH';
const CHANGE_CITY = 'CHANGE-CITY';
const CHANGE_CONTACT = 'CHANGE-CONTACT';
const ADD_INFO = 'ADD-INFO'

export const addPostActionCreator = () => {
    return ({
        type: ADD_POST,
    })
};
export const updatePostActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        text: text
    })
};
export const addStatusActionCreator = (text) => {
    return ({
        type: ADD_STATUS,
        text: text
    })
};
export const updateStatusActionCreator = (text) => {
    return ({
        type: UPDATE_STATUS_TEXT,
        text: text
    })
};
export const likePostActionCreator = (id) => {
    return ({
        type: LIKE_POST,
        id: id,
    })
};
export const dislikePostActionCreator = (id) => {
    return ({
        type: DISLIKE_POST,
        id: id,
    })
};
export const changeNameActionCreator = (text) => {
    return ({
        type: CHANGE_NAME,
        text: text,
    })
};
export const changeBirthActionCreator = (text) => {
    return ({
        type: CHANGE_BIRTH,
        text: text,
    })
};
export const changeCityActionCreator = (text) => {
    return ({
        type: CHANGE_CITY,
        text: text,
    })
};
export const changeContactActionCreator = (text) => {
    return ({
        type: CHANGE_CONTACT,
        text: text,
    })
};
export const addInfoActionCreator = () => {
    return ({
        type: ADD_INFO,
    })
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newState;
            let newId = state.posts[0].id + 1;
            if (/\S/.test(state.newPostText)) {
                let newPost = { id: newId, message: state.newPostText, likes: 9, isLiked: false };
                newState = { ...state, posts: [newPost, ...state.posts] }
                newState.newPostText = "";
                return newState;
            } else {
                return state;
            }
        case UPDATE_NEW_POST_TEXT:
            newState = { ...state, newPostText: action.text }
            //state.newPostText = action.text;
            return newState;
        case ADD_STATUS:
            if (/\S/.test(state.statusText)) {
                newState = { ...state, statusText: [state.statusText] };
                return newState;
            } else {
                return state;
            }
        case UPDATE_STATUS_TEXT:
            newState = { ...state, statusText: action.text };
            return newState;
        case LIKE_POST:
            newState = {
                ...state, posts: [...state.posts]
            };
            let newStatePost = newState.posts.filter((item) => item.id == action.id);
            newStatePost[0].likes += 1;
            newStatePost[0].isLiked = true;
            return newState;
        case DISLIKE_POST:
            newState = {
                ...state, posts: [...state.posts]
            };
            newStatePost = newState.posts.filter((item) => item.id == action.id);
            newStatePost[0].likes -= 1;
            newStatePost[0].isLiked = false;
            return newState;
        case CHANGE_NAME:
            newState = { ...state, newName: action.text };
            return newState;
        case CHANGE_BIRTH:
            newState = { ...state, newBirthDate: action.text };
            return newState;
        case CHANGE_CITY:
            newState = { ...state, newCity: action.text };
            return newState;
        case CHANGE_CONTACT:
            newState = { ...state, newContact: action.text };
            return newState;
        case ADD_INFO:
            newState = { ...state, profileInfo: { ...state.profileInfo } };
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
        default:
            return state;
    }
};
export default profileReducer;
