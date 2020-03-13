/**
 * @description             Create Store and apply Middlewares. 
 *                          Here is reponsibly for combine stores.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import types from './types';
import initials from './initials';

function repositories(state = initials.FETCH_USERS, action) {
    switch (action.type) {
        case types.FETCH_USERS: {
            return { data: action.data };
        }
        default: return state;
    }
}

const store = createStore(repositories, applyMiddleware(thunk));


export default store;