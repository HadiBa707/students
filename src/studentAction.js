import * as actionTypes from './actionTypes';

export const addStudent = (payload) => {
    return {
        type: actionTypes.ADD_STUDENT,
        payload: payload
    };
};