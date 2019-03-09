const newsReducer = (state, action) => {
    if (action.type === 'ADD-NEW-NEW-ITEM') {
        let newNewItem = { id: 2, newsItemText: state.newsText, img: '', likes: 12 };
        if (state.newsText.length !== 0) { state.newsItem.push(newNewItem) };
        state.newsText = "";
    } else if (action.type === 'UPDATE-NEW-NEWS-ITEM-TEXT') {
        state.newsText = action.text;
    }
    return state;
};
export default newsReducer;

