import React from 'react'

import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {addNewUserTooth, complain} from "../../../../../redux/reducers/teethReducer";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Auth/AuthUtils";
import {maxLengthCreator, requiredField} from "../../../../../utils/validators/validators";

const maxLength256 = maxLengthCreator(256);
const ComplainForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} validate={[maxLength256, requiredField]} name="complaint"
                           placeholder="Describe your problem"/>
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
        let complaint = formData.complaint;
        if (!complaint) {
            return;
        }
        if (props.tooth.id) {
            props.complain(props.tooth.id, complaint);
        } else {
            props.addNewUserTooth(props.user.userId, props.tooth.toothNumber, complaint)
        }
        props.scrollOnSubmit();
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