import { createSelector } from "reselect";

let dialogsPageSelector = state => state.dialogsPage;
export let newMessage = createSelector(dialogsPageSelector, dialogsPage => dialogsPage.newMessage);
export let dialogs = createSelector(dialogsPageSelector, dialogsPage => dialogsPage.dialogs);
export let messages = createSelector(dialogsPageSelector, dialogsPage => dialogsPage.messages);

let newsPageSelector = state => state.newsPage;
export let newsText = createSelector(newsPageSelector, newsPage => newsPage.newsText);
export let newsItem = createSelector(newsPageSelector, newsPage => newsPage.newsItem);

let profilePageSelector = state => state.profilePage;
export let posts = createSelector(profilePageSelector, profilePage => profilePage.posts);
export let newPostText = createSelector(profilePageSelector, profilePage => profilePage.newPostText);

export let info = createSelector(profilePageSelector, profilePage => profilePage.profileInfo);
export let status = createSelector(profilePageSelector, profilePage => profilePage.statusText);

export let fullName = createSelector(info, profileInfo => profileInfo.fullName);
export let aboutMe = createSelector(info, profileInfo => profileInfo.aboutMe);
export let lookingForAJob = createSelector(info, profileInfo => profileInfo.lookingForAJob);
export let lookingForAJobDescription = createSelector(info, profileInfo => profileInfo.lookingForAJobDescription);
export let contacts = createSelector(info, profileInfo => profileInfo.contacts);

export let album = createSelector(profilePageSelector, profilePage => profilePage.photos);

export let searchUsersPageSelector = state => state.searchUsersPage;
export let authData = createSelector(searchUsersPageSelector, searchUsersPage => searchUsersPage.authData);
export let isLogin = createSelector(searchUsersPageSelector, searchUsersPage => searchUsersPage.isLogin);
export let users = createSelector(searchUsersPageSelector, searchUsersPage => searchUsersPage.users);
export let nameFilter = createSelector(searchUsersPageSelector, searchUsersPage => searchUsersPage.nameFilter);
export let searchUserByName = createSelector([users, nameFilter], (users, nameFilter) => {
    if (!(/\s/.test(nameFilter)) && nameFilter.length > 0) {
     let filteredUsers = users.filter(user => user.name.toLowerCase().includes(nameFilter.toLowerCase()))
     return filteredUsers
    } return users
});

