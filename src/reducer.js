import * as actionTypes from './actionTypes';
 

const initialState = {
    students: []
}

const studentReducer = (state = initialState , action) => {
    let updatedState = {...state};
    if(action.type === actionTypes.ADD_STUDENT) {
        updatedState.students = state.students.concat(action.payload.student)
    }
    return updatedState;
};

export default studentReducer;