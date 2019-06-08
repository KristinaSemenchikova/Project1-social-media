import { combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer';
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";
import loginReducer from "./login-reducer";



let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    newsPage: newsReducer,
    searchUsersPage: usersReducer,
    loginPage: loginReducer,
    form: formReducer,
});
let store = createStore(reducers,applyMiddleware(thunk));

export default store;

