import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as studentAction from './studentAction';
import StudentForm from './studentForm';


class Students extends Component {

    state = {
        studentInput: ''
    };


    addStudentHandler = (event) => {
        event.preventDefault();
        this.props.addingStudent(this.state.studentInput);
        this.setState({...this.state , studentInput: ''})
    };
    
    studentInputChangeHandler = (event) => {
        this.setState({...this.state , studentInput: event.target.value})
    };
    // console.log(props.students);


    render () {
        return (
            <div>
                <StudentForm 
                addStudentHandler={this.addStudentHandler}
                studentInputChangeHandler={this.studentInputChangeHandler}
                studentInput={this.state.studentInput} />
                <h1>Students List</h1>
                <ul>
                    {this.props.students.map((student , index) => {
                        return <li key={index}>{student}</li>
                    })}
                </ul>
            </div>
        );
    }
};
        



const mapStateToProps = state => {
    return {
        students: state.students
    };
}

const mapDispatchToProps = dispatch => {
    return{
        addingStudent: (student) => dispatch(studentAction.addStudent({student:student}))
    };
};

export default connect(mapStateToProps , mapDispatchToProps)(Students);