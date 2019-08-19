import React from 'react'
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {addNewUserTooth, treat} from "../../../../../redux/reducers/teethReducer";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Auth/AuthUtils";
import {maxLengthCreator, requiredField} from "../../../../../utils/validators/validators";

const maxLength256 = maxLengthCreator(256);
const TreatmentForm = (props) => {
    return (<div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[maxLength256, requiredField]} name="treatment"
                       placeholder="Describe procedure"/>
                <Field component={Input} name="price" placeholder="Enter procedure price"/>
            </div>
            <div>
                <Button href={""} onClick={props.submit}>Treat</Button>
            </div>
        </form>
    </div>)
};
const TreatmentReduxForm = reduxForm({form: 'treatment'})(TreatmentForm);
const Treat = (props) => {
    const onSubmit = (formData) => {
        let price = formData.price;
        let treatment = formData.treatment;
        if (!treatment) {
            return;
        }
        if (props.tooth.id) {
            props.treat(props.tooth.id, treatment, price);
        } else {
            props.addNewUserTooth(props.user.userId, props.tooth.toothNumber, treatment, price)
        }
        props.scrollOnSubmit();
    };
    return (<TreatmentReduxForm onSubmit={onSubmit}/>)
};
let mapStateToProps = (state) => ({
    user: state.profilePage.selectedUser,
    tooth: state.teethPage.selectedTooth,
});

export default connect(mapStateToProps, {addNewUserTooth, treat})(Treat);