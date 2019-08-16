import React from 'react'

import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {addNewUserTooth, complain} from "../../../../redux/reducers/teethReducer";
import {Field, reduxForm} from "redux-form";

const ComplainForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"input"} name="complaint"
                           placeholder="Describe your problem"
                    />
                </div>
                <div>
                    <Button href={""} onClick={props.submit}>Complain</Button>
                </div>
            </form>
        </div>
    )
};

const ComplaintReduxForm = reduxForm({form: 'complain'})(ComplainForm);

const Complain = (props) => {
    const onSubmit = (formData) => {
        let problemDescription = formData.complaint;
    debugger;
        if (!problemDescription) {
            return;
        }
        if (props.tooth.id) {
            props.complain(props.tooth.id, problemDescription);
        } else {
            props.addNewUserTooth(props.user.userId, props.tooth.toothNumber, problemDescription)
        }
    };

    return (
        <ComplaintReduxForm onSubmit={onSubmit}/>
    )
};

let mapStateToProps = (state) => ({
    user: state.profilePage.selectedUser,
    tooth: state.teethPage.selectedTooth,
});

export default connect(mapStateToProps, {addNewUserTooth, complain})(Complain);