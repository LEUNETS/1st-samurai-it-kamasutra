import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
                { id: 3, message: 'blabla', likesCount: 11 },
                { id: 4, message: 'Dada', likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Anton' },
                { id: 3, name: 'Roman' },
                { id: 4, name: 'Max' },
                { id: 5, name: 'Angelina' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it' },
                { id: 3, message: 'Hello another one' },
                { id: 4, message: 'You are welcome' },
                { id: 5, message: 'What?' },
            ],

            newMessageBody: ""
        },

        sidebar: {
            friendsBlock: [
                { id: 1, friend: 'Andrew' },
                { id: 2, friend: 'Sasha' },
                { id: 3, friend: 'Sveta' }
            ]
        }
    
    },
    _callSubscriber() {
        console.log('State changed');
    },


    getState() {
        debugger;
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = (observer);
    },


    dispatch(action) {  
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarReducer = sidebarReducer(this._state.sidebarReducer, action);

        this._callSubscriber(this._state);
}
}
 

export default store;
window.store = store;
// можно обратиться глобально через window.store

//store - OOP


// addPost() {
//     let newPost = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0
//     };

//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber(this._state);
// },
// _updateNewPostText(newText) {
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber()
// Можно сделать их приватными _ и вызвать снизу через .this_state.profilePage.newPostText
// },  // Заменили методом диспатч в который приходит тип в обязательном порядке 
