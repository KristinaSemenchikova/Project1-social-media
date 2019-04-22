import { handleActions, createAction } from "redux-actions";

let initialState = {
    users: [
        {
            id: 1,
            fullName: 'Christian Bale',
            avatar: 'https://mfst.igromania.ru/wp-content/uploads/2016/01/bale-start.jpg',
            status: 'Бэтмэн круче Железного человека',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
            isFollowed: true
        },
        {
            id: 2,
            fullName: 'Ryan Reynolds',
            avatar: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAykO5L.img?h=317&w=624&m=6&q=60&o=f&l=f&x=1068&y=368',
            status: 'Пикааачу',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
            isFollowed: false
        },
        {
            id: 3,
            fullName: 'Ryan Gosling',
            avatar: 'https://cdnph.upi.com/svc/sv/upi/6241487592217/2017/1/834a9c5065f23f503e786fddcf03fb43/Ryan-Gosling-Rooney-Mara-fall-in-love-in-first-trailer-for-Song-to-Song.jpg',
            status: 'Мы летим на шашлындос',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
            isFollowed: false
        },
        {
            id: 4,
            fullName: 'Leonardo Dicaprio',
            avatar: 'https://www.radiodelta.rs/wp-content/uploads/2017/08/56d34c31c361887b278b4606.jpg',
            status: 'Люблю сгущенку',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
            isFollowed: true
        }
    ],
};

export const followUserActionCreator = createAction('FOLLOW_USER');
export const unfollowUserActionCreator = createAction('UNFOLLOW_USER');
export const setUsersActionCreator = createAction('SET_USERS');

const usersReducer = handleActions({

    [setUsersActionCreator.toString()]: (state, {
        payload: users
    }) => {
        let newState = { ...state, users: [...state.users, ...users] };
        return newState;
    },

    [followUserActionCreator.toString()]: (state, {
        payload: id
    }) => {
        let newState = { ...state, users: state.users.map(item => item) };
        let user = newState.users.filter(item => item.id === id);
        user[0].isFollowed = true;
        return newState;
    },


    [unfollowUserActionCreator.toString()]: (state, {
        payload: id
    }) => {
        let newState = { ...state, users: [...state.users] };
        let user = newState.users.filter(item => item.id === id);
        user[0].isFollowed = false;
        return newState;
    },

}, initialState);

export default usersReducer;

