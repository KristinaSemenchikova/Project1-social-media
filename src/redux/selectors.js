import { createSelector } from "reselect";

let dialogsPageSelector = state => state.dialogsPage;
export let newMessage = createSelector(dialogsPageSelector,dialogsPage => dialogsPage.newMessage);
export let dialogs = createSelector(dialogsPageSelector,dialogsPage => dialogsPage.dialogs);
export let messages = createSelector(dialogsPageSelector,dialogsPage => dialogsPage.messages);

let newsPageSelector = state => state.newsPage;
export let newsText = createSelector(newsPageSelector, newsPage => newsPage.newsText);
export let newsItem = createSelector(newsPageSelector, newsPage => newsPage.newsItem);

let profilePageSelector = state => state.profilePage;
export let posts = createSelector(profilePageSelector, profilePage => profilePage.posts);
export let newPostText = createSelector(profilePageSelector, profilePage => profilePage.newPostText);

export let info = createSelector(profilePageSelector, profilePage => profilePage.profileInfo);
export let status = createSelector(profilePageSelector, profilePage => profilePage.statusText);

export let name = createSelector(profilePageSelector, profilePage => profilePage.newName);
export let birthdayDate = createSelector(profilePageSelector, profilePage => profilePage.newBirthDate);
export let city = createSelector(profilePageSelector, profilePage => profilePage.newCity);
export let contact = createSelector(profilePageSelector, profilePage => profilePage.newContact);  

export let album = createSelector(profilePageSelector, profilePage => profilePage.photos);
