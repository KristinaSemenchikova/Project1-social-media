let initialState = {
    newsItem: [
      { id: 1, newsItemText: 'look at my cute pom', img: 'https://pbs.twimg.com/media/DiUZj6fU0AUHf42.jpg', likes: 21 }
    ],
    newsText: 'Anything meow?'
  };

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-NEW-NEW-ITEM':
            let newNewItem = { id: 2, newsItemText: state.newsText, img: '', likes: 12 };
            if (state.newsText.length !== 0) { state.newsItem.push(newNewItem) };
            state.newsText = "";
            return state;
        case 'UPDATE-NEW-NEWS-ITEM-TEXT':
            state.newsText = action.text;
            return state;
        default: return state;
    }
};
export default newsReducer;

