let initialState = {
  dialogs: [
    { id: 1, name: 'Christian Bale', avatar: 'https://mfst.igromania.ru/wp-content/uploads/2016/01/bale-start.jpg' },
    { id: 2, name: 'Ryan Reynolds', avatar: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAykO5L.img?h=317&w=624&m=6&q=60&o=f&l=f&x=1068&y=368' },
    { id: 3, name: 'Ryan Gosling', avatar: 'https://cdnph.upi.com/svc/sv/upi/6241487592217/2017/1/834a9c5065f23f503e786fddcf03fb43/Ryan-Gosling-Rooney-Mara-fall-in-love-in-first-trailer-for-Song-to-Song.jpg' },
    { id: 4, name: 'Leonardo Dicaprio', avatar: 'https://www.radiodelta.rs/wp-content/uploads/2017/08/56d34c31c361887b278b4606.jpg' }
  ],

  messages: [
    { id: 1, message: 'What are you doing tonight?' },
    { id: 2, message: 'Hi' },
    { id: 3, message: 'Lets go to party' },
    { id: 4, message: 'LOL' }
  ],
  newMessage: ''
};
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const sendMessageActionCreator = () => {
  return ({
    type: SEND_MESSAGE,
  })
};
export const updateMessageTextActionCreator = (text) => {
  return ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
  })
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newState;
      let newId = state.messages[state.messages.length - 1].id + 1;
      if (/\S/.test(state.newMessage)) {
        let newMessage = { id: newId, message: state.newMessage };
        // if (state.newMessage.length !== 0) { state.messages.push(newMessage) };
        newState = { ...state, messages: [newMessage, ...state.messages] }
        newState.newMessage = "";
        return newState;
      } else {
        return state;
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      newState = { ...state, newMessage: action.text };
      return newState;
    default:
      return state;
  }
};
export default dialogsReducer;
