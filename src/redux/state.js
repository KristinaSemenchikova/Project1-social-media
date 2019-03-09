let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi,sweety', likes: 10 },
        { id: 2, message: 'Come and see my Instagram', likes: 17 }
      ],
      newPostText: 'Anything meow?'
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Christian Bale', avatar: 'https://mfst.igromania.ru/wp-content/uploads/2016/01/bale-start.jpg' },
        { id: 2, name: 'Ryan Reynolds', avatar: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAykO5L.img?h=317&w=624&m=6&q=60&o=f&l=f&x=1068&y=368' },
        { id: 3, name: 'Ryan Gosling', avatar: 'https://cdnph.upi.com/svc/sv/upi/6241487592217/2017/1/834a9c5065f23f503e786fddcf03fb43/Ryan-Gosling-Rooney-Mara-fall-in-love-in-first-trailer-for-Song-to-Song.jpg' },
      ]
    },
    newsPage: {
      newsItem: [
        { id: 1, newsItemText: 'look at my cute pom', img: 'https://pbs.twimg.com/media/DiUZj6fU0AUHf42.jpg', likes: 21 }
      ],
      newsText: 'Anything meow?'
    }

  },
  _callSubscriber() {
    console.log('State is changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _addPost() {
    let newPost = { id: 5, message: this._state.profilePage.newPostText, likes: 9 };
    if (this._state.profilePage.newPostText.length !== 0) { this._state.profilePage.posts.push(newPost) };
    this._callSubscriber();
    this._state.profilePage.newPostText = "";
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  _sendMessage() {
    let newMessage = { id: 5, message: this._state.dialogsPage.newMessage };
    if (this._state.dialogsPage.newMessage !== 0) { this._state.dialogsPage.messages.push(newMessage) };
    this._callSubscriber();
    this._state.dialogsPage.newMessage = "";
  },
  _updateNewMessage(messageText) {
    this._state.dialogsPage.newMessage = messageText;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _addNewNewItem() {
    let newNewItem = { id: 2, newsItemText: this._state.newsPage.newsText, img: '', likes: 12 };
    if (this._state.newsPage.newsText !== 0) { this._state.newsPage.newsItem.push(newNewItem) };
    this._callSubscriber();
    this._state.newsPage.newsText = "";
  },
  _updateNewNewsItemText(newsText) {
    this._state.newsPage.newsText = newsText;
    this._callSubscriber();
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      this._addPost();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.text);
    } else if (action.type === 'SEND-MESSAGE') {
      this._sendMessage()
    }
    else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._updateNewMessage(action.text)
    } else if (action.type === 'ADD-NEW-NEW-ITEM'){
      this._addNewNewItem();
    } else if (action.type === 'UPDATE-NEW-NEWS-ITEM-TEXT'){
      this._updateNewNewsItemText(action.text);
    }
  }
}


export const actionCreator = (type, text) => {
  return ({
    type: type,
    text: text
  })
};
export default store;
