const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = { id: 5, message: state.newMessage };
            if (state.newMessage.length !== 0) { state.messages.push(newMessage) };
            state.newMessage = "";
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessage = action.text;
            return state;
        default:
            return state;
    }
};
export default dialogsReducer;