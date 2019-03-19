let initialState = {
    posts: [
        { id: 1, message: 'Hi,sweety', likes: 10, isLiked: false },
        { id: 2, message: 'Come and see my Instagram', likes: 17, isLiked: false }
    ],
    newPostText: 'Anything meow?',
    statusText: 'Change status',
    profileInfo: {
        name: 'Soft Kitty',
        birthdayDate: '08.08.1998',
        city: 'London',
        contact: '+44 810 234 678 98 33'
    }
};

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_STATUS = 'ADD-STATUS';
const UPDATE_STATUS_TEXT = 'UPDATE-STATUS-TEXT';
const LIKE_POST = 'LIKE-POST';
const DISLIKE_POST = 'DISLIKE-POST';

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

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newState;
            let newId = state.posts[state.posts.length - 1].id + 1;
            let newPost = { id: newId, message: state.newPostText, likes: 9, isLiked: false };
            //if (state.newPostText.length !== 0) { state.posts.push(newPost) };
            newState = { ...state, posts: [newPost, ...state.posts] }
            newState.newPostText = "";
             return newState;
        case UPDATE_NEW_POST_TEXT:
            newState = { ...state, newPostText: action.text }
            //state.newPostText = action.text;
            return newState;
        case ADD_STATUS:
            newState = { ...state, statusText: action.text }
            // state.statusText = action.text;
            return newState;
        case UPDATE_STATUS_TEXT:
            newState = { ...state, statusText: action.text }
            // state.statusText = action.text;
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
        default:
            return state;
    }
};
export default profileReducer;
// / state.newPostText = action.text;
//             // return state;
/*
       case CHANGE_CURRENT_NOTE:
       return {
           ...state,
           currentWritingNote: {
               ...state.currentWritingNote,
               text: action.text
           }
       };
       */

