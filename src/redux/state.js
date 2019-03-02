import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi,sweety', likes: 10 },
      { id: 2, message: 'Come and see my Instagram', likes: 17 }
    ]
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
    ]
  },
  sidebar: {
    friends: [
      { id: 1, name: 'Christian Bale', avatar: 'https://mfst.igromania.ru/wp-content/uploads/2016/01/bale-start.jpg' },
      { id: 2, name: 'Ryan Reynolds', avatar: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAykO5L.img?h=317&w=624&m=6&q=60&o=f&l=f&x=1068&y=368' },
      { id: 3, name: 'Ryan Gosling', avatar: 'https://cdnph.upi.com/svc/sv/upi/6241487592217/2017/1/834a9c5065f23f503e786fddcf03fb43/Ryan-Gosling-Rooney-Mara-fall-in-love-in-first-trailer-for-Song-to-Song.jpg' },
    ]
  }

};
export let addPost = (postMessage) => {
  let newPost = { id: 5, message: postMessage, likes: 9 };
  if (postMessage.length !== 0) {state.profilePage.posts.push(newPost)};
  rerenderEntireTree(state);
};

export default state;