

const studentForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addStudentHandler}>
                <input  
                    type="text"
                    placeholder="Enter The Student Name"
                    value={props.studentInput}
                    onChange={(event) => props.studentInputChangeHandler(event)}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default studentForm;