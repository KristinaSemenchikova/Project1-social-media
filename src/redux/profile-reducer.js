let initialState = {
    posts: [
      { id: 1, message: 'Hi,sweety', likes: 10 },
      { id: 2, message: 'Come and see my Instagram', likes: 17 }
    ],
    newPostText: 'Anything meow?'
  };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = { id: 5, message: state.newPostText, likes: 9 };
            if (state.newPostText.length !== 0) { state.posts.push(newPost) };
            state.newPostText = "";
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
};
export default profileReducer;
