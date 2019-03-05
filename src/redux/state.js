let rerenderEntireTree = () => {
  console.log('State is changed')
};

let state = {
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
  }

};
export const addPost = () => {
  let newPost = { id: 5, message: state.profilePage.newPostText, likes: 9 };
  if (state.profilePage.newPostText.length !== 0) { state.profilePage.posts.push(newPost) };
  rerenderEntireTree();
  state.profilePage.newPostText = "";
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};

export const sendMessage = () => {
  let newMessage = { id: 5, message: state.dialogsPage.newMessage };
  if (state.dialogsPage.newMessage !== 0) { state.dialogsPage.messages.push(newMessage) };
  rerenderEntireTree();
  state.dialogsPage.newMessage = "";
};
export const updateNewMessage = (messageText) => {
  state.dialogsPage.newMessage = messageText;
  rerenderEntireTree();
};
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
export default state;