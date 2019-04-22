import { handleActions, createAction } from "redux-actions";

let initialState = {
    newsItem: [
        { id: 1, newsItemText: 'look at my cute pom', img: 'https://pbs.twimg.com/media/DiUZj6fU0AUHf42.jpg', likes: 21, isLiked: false }
    ],
    newsText: 'Anything meow?'
};

export const addNewNewsItem = createAction('SOCIAL_NETWORK/NEWS_PAGE/ADD_NEW_NEW_ITEM');
export const updateNewNewsItem = createAction('SOCIAL_NETWORK/NEWS_PAGE/UPDATE_NEW_NEWS_ITEM_TEXT');
export const likeNews = createAction('SOCIAL_NETWORK/NEWS_PAGE/LIKE_NEWS');
export const dislikeNews = createAction('SOCIAL_NETWORK/NEWS_PAGE/DISLIKE_NEWS');

const newsReducer = handleActions({

    [addNewNewsItem.toString()]: (state) => {
        let newState;
        let newId = state.newsItem[0].id + 1;
        if (/\S/.test(state.newsText)) {
            let newNewItem = { id: newId, newsItemText: state.newsText, img: '', likes: 12, isLiked: false };
            newState = {
                ...state,
                newsItem: [newNewItem, ...state.newsItem],
                newsText: ""
            }
            return newState;
        } else {
            return state
        };
    },

    [updateNewNewsItem.toString()]: (state, {
        payload: text 
    }) => {
        let newState = { ...state, newsText: text };
        return newState;
    },

    [likeNews.toString()]: (state, {
        payload: id 
    }) => {
        let newState = { ...state, newsItem: [...state.newsItem] }
        let newStateNewItem = newState.newsItem.filter((item) => item.id == id);
        newStateNewItem[0].likes += 1;
        newStateNewItem[0].isLiked = true;
        return newState;
    },

    [dislikeNews.toString()]: (state, {
        payload: id 
    }) => {
        let newState = { ...state, newsItem: [...state.newsItem] }
        let newStateNewItem = newState.newsItem.filter((item) => item.id == id);
        newStateNewItem[0].likes -= 1;
        newStateNewItem[0].isLiked = false;
        return newState;
    }
}, initialState);

export default newsReducer;


