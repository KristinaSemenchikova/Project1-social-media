import { handleActions, createAction } from "redux-actions";

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
export const sendMessageActionCreator = createAction('SEND_MESSAGE');
export const updateMessageTextActionCreator = createAction('UPDATE_NEW_MESSAGE_TEXT');

const dialogsReducer = handleActions({

  [sendMessageActionCreator.toString()]: (state) => {
    let newState;
    let newId = state.messages[state.messages.length - 1].id + 1;
    if (/\S/.test(state.newMessage)) {
      let newMessage = { id: newId, message: state.newMessage };
      newState = {
        ...state,
        messages: [newMessage, ...state.messages],
        newMessage: ""
      }
      return newState;
    } else {
      return state;
    }
  },
  [updateMessageTextActionCreator.toString()]: (state, {
    payload: text
  }) => {
    let newState = { ...state, newMessage: text };
    return newState;
  },

}, initialState);

export default dialogsReducer;
