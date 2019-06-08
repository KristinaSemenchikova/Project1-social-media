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
export let userInfoRequestStatus = createSelector(profilePageSelector, profilePage => profilePage.userInfoRequestStatus);

export let fullName = createSelector(info, profileInfo => profileInfo.fullName);
export let aboutMe = createSelector(info, profileInfo => profileInfo.aboutMe);
export let lookingForAJob = createSelector(info, profileInfo => profileInfo.lookingForAJob);
export let lookingForAJobDescription = createSelector(info, profileInfo => profileInfo.lookingForAJobDescription);
export let contacts = createSelector(info, profileInfo => profileInfo.contacts);
export let photo =createSelector(profilePageSelector, profilePage => profilePage.photo);
export let userId = createSelector(info, profileInfo => profileInfo.userId);

export let album = createSelector(profilePageSelector, profilePage => profilePage.photos);

let searchUsersPageSelector = state => state.searchUsersPage;
export let getUsersRequest = createSelector(searchUsersPageSelector, searchUsersPage => searchUsersPage.getUsersRequest);
export let users = createSelector(searchUsersPageSelector, searchUsersPage => searchUsersPage.users);
export let followedUsers = createSelector(users, users => {
    let followedUsers = users.filter(user => user.followed === true)
    return followedUsers;
})
export let usersFilter = createSelector(searchUsersPageSelector, searchUsersPage => searchUsersPage.usersFilter);
export let filteredUsers = createSelector([users, usersFilter], (users, usersFilter) => {
    if (usersFilter === 'all') {
        return users
    } else if (usersFilter === 'followed') {
        let filteredUsers = users.filter(user => user.followed === true)
        return filteredUsers
    } else if (usersFilter === 'unfollowed') {
        let filteredUsers = users.filter(user => user.followed === false)
        return filteredUsers
    }
})
export let nameFilter = createSelector(searchUsersPageSelector, searchUsersPage => searchUsersPage.nameFilter);
export let searchUserByName = createSelector([filteredUsers, nameFilter], (filteredUsers, nameFilter) => {
    if (!(/\s/.test(nameFilter)) && nameFilter.length > 0) {
        let users = filteredUsers.filter(user => user.name.toLowerCase().includes(nameFilter.toLowerCase()))
        return users
    } return filteredUsers
});

export let loginPageSelector = state => state.loginPage;
export let authData = createSelector(loginPageSelector, loginPage => loginPage.authData);
export let isLogin = createSelector(loginPageSelector, loginPage => loginPage.isLogin);
export let captcha = createSelector(loginPageSelector, loginPage => loginPage.captcha);
export let loginRequest = createSelector(loginPageSelector, loginPage => loginPage.loginRequest);
export let id = createSelector(loginPageSelector, loginPage => loginPage.userId);
