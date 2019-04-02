import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import newsReducer from './news-reducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    newsPage: newsReducer,
    form: formReducer
});
let store = createStore(reducers);

export default store;

