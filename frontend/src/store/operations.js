/**
 * @description             Operations using or not Axios
 */

import axios from 'axios'
import utils from './utils';
import actions from './actions';

function getUsers() {
    console.log("hj")
    return dispatch => {
        axios.get(`${utils.URL}/users`)
            .then(res => {
                dispatch(actions.getUsers(res.data))
            });
    };
}
function saveUser(user) {
    return dispatch => {
        axios.post(`${utils.URL}/users/create`, user)
            .then(res => { });
    };
}
function updateUser(_id, user) {
    return dispatch => {
        axios.put(`${utils.URL}/users/${_id}/update`, user)
            .then(res => { });
    };
}
function deleteUser(_id) {
    return dispatch => {
        axios.delete(`${utils.URL}/users/${_id}/delete`)
            .then(res => { });
    };
}
export default {
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}