import NewsItem from "../components/News/NewsItem/NewsItem";

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
            let newId = state.newsItem[state.newsItem.length - 1].id + 1;
            let newNewItem = { id: newId, newsItemText: state.newsText, img: '', likes: 12, isLiked: false };
            if (state.newsText.length !== 0) { state.newsItem.push(newNewItem) };
            state.newsText = "";
            return state;
        case UPDATE_NEW_NEWS_ITEM_TEXT:
            state.newsText = action.text;
            return state;
        case LIKE_NEWS:
            let news = state.newsItem.filter((item) => item.id == action.id);
            news[0].likes += 1;
            news[0].isLiked = true;
            return state;
        case DISLIKE_NEWS:
            news = state.newsItem.filter((item) => item.id == action.id);
            news[0].likes -= 1;
            news[0].isLiked = false;
            return state;

        default: return state;
    }
};
export default newsReducer;

