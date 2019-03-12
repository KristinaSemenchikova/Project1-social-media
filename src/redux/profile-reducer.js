let initialState = {
    posts: [
        { id: 1, message: 'Hi,sweety', likes: 10, isLiked: false },
        { id: 2, message: 'Come and see my Instagram', likes: 17, isLiked: false }
    ],
    newPostText: 'Anything meow?',
    statusText: 'Change status'
};

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_STATUS = 'ADD-STATUS';
const UPDATE_STATUS_TEXT = 'UPDATE-STATUS-TEXT';
const LIKE_POST = 'LIKE-POST';
const UNLIKE_POST = 'UNLIKE-POST';

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
export const unlikePostActionCreator = (id) => {
    return ({
        type: UNLIKE_POST,
        id: id,
    })
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newId = state.posts[state.posts.length - 1].id + 1;
            let newPost = { id: newId, message: state.newPostText, likes: 9, isLiked: false };
            if (state.newPostText.length !== 0) { state.posts.push(newPost) };
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case ADD_STATUS:
            state.statusText = action.text;
            return state;
        case UPDATE_STATUS_TEXT:
            state.statusText = action.text;
            return state;
        case LIKE_POST:
            let post = state.posts.filter((item) => item.id == action.id);
            post[0].likes += 1;
            post[0].isLiked = true;
            return state;
        case UNLIKE_POST:
            post = state.posts.filter((item) => item.id == action.id);
            post[0].likes -= 1;
            post[0].isLiked = false;
            return state;
        default:
            return state;
    }
};
export default profileReducer;
