const profileReducer = (state, action) => {
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
