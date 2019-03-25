let initialState = {
    newsItem: [
        { id: 1, newsItemText: 'look at my cute pom', img: 'https://pbs.twimg.com/media/DiUZj6fU0AUHf42.jpg', likes: 21, isLiked: false }
    ],
    newsText: 'Anything meow?'
};
const ADD_NEW_NEW_ITEM = 'ADD-NEW-NEW-ITEM';
const UPDATE_NEW_NEWS_ITEM_TEXT = 'UPDATE-NEW-NEWS-ITEM-TEXT';
const LIKE_NEWS = 'LIKE-NEWS';
const DISLIKE_NEWS = 'DISLIKE-NEWS';

export const likeNewsActionCreator = (id) => {
    return ({
        type: LIKE_NEWS,
        id: id,
    })
};
export const dislikeNewsActionCreator = (id) => {
    return ({
        type: DISLIKE_NEWS,
        id: id,
    })
};

export const addNewActionCreator = () => {
    return ({
        type: ADD_NEW_NEW_ITEM,
    })
};
export const updateNewActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_NEWS_ITEM_TEXT,
        text: text
    })
};
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_NEW_ITEM:
            let newState;
            let newId = state.newsItem[0].id + 1;
            if (/\S/.test(state.newsText)) {
                let newNewItem = { id: newId, newsItemText: state.newsText, img: '', likes: 12, isLiked: false };
                newState = { ...state, newsItem: [newNewItem, ...state.newsItem] }
                newState.newsText = "";
                return newState;
            } else {
                return state
            };
        case UPDATE_NEW_NEWS_ITEM_TEXT:
            newState = { ...state, newsText: action.text };
            return newState;
        case LIKE_NEWS:
            newState = { ...state, newsItem: [...state.newsItem] }
            let newStateNewItem = newState.newsItem.filter((item) => item.id == action.id);
            newStateNewItem[0].likes += 1;
            newStateNewItem[0].isLiked = true;
            return newState;
        case DISLIKE_NEWS:
            newState = { ...state, newsItem: [...state.newsItem] }
            newStateNewItem = newState.newsItem.filter((item) => item.id == action.id);
            newStateNewItem[0].likes -= 1;
            newStateNewItem[0].isLiked = false;
            return newState;

        default: return state;
    }
};
export default newsReducer;

