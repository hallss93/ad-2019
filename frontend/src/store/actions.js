/**
 * @description             Actions modules for reduce code
 */
import types from './types';

const getUsers = (data) => {
    return {
        type: types.FETCH_USERS,
        data,
    }
}
export default {
    getUsers
}