import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {signUp} from "../../../../redux/reducers/authReducer";
import {getTranslatedField, Input} from "../AuthUtils";
import {localizeText} from "../../../../utils/translator/Translator";
import avatar from "../../../../assets/images/avatar-01.jpg";
import Button from "@material-ui/core/Button";
import {Translator} from "react-translated";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../../utils/validators/validators";

const SignUpForm = (props) => {
    let loginField = getTranslatedField("login", "text", "loginPlaceholder");
    let passwordField = getTranslatedField("password", "password", "passwordPlaceholder");
    let inputField = (value) =>
        <Translator>
            {({translate}) => (
                <span className={'focus-input100'} data-placeholder={translate({text: `${value}`})}
                />
            )}
        </Translator>;

    let formValidation = [requiredField, minLength5, maxLength255];
    return (

        <>
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-85 p-b-20">
                            <form className="login100-form validate-form" onSubmit={props.handleSubmit}>
					        <span className="login100-form-title p-b-70">
                                {localizeText("welcome")}
					        </span>

                                <span className="login100-form-avatar">
						        <img src={avatar} alt="AVATAR"/>
					        </span>

                                <div className="wrap-input100 validate-input m-t-85 m-b-35"
                                     data-validate="Enter username">

                                    <Field className="input100" type="text" name="username" component={Input}
                                           validate={formValidation}/>
                                    {inputField('login')}
                                </div>

                                <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                                    <Field className="input100" type="password" name="password" component={Input}
                                           validate={formValidation}/>
                                    {inputField('password')}
                                </div>

                                <div className="container-login100-form-btn">
                                    <Button className="login100-form-btn" href={""} onClick={props.submit}>
                                        {localizeText('signUp')}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

const SignUpFormReduxForm = reduxForm({form: 'signUpForm'})(SignUpForm);
const minLength5 = minLengthCreator(5);
const maxLength255 = maxLengthCreator(255);
const SignUp = (props) => {
    const onSubmit = (formData) => {
        props.signUp(formData.username, formData.password)
    };

    return (
        props.token ? <Redirect to={"/users"}/> :
            <div>
                <SignUpFormReduxForm onSubmit={onSubmit}/>
            </div>
    )
};
const mapStateToProps = (state) => ({
    token: state.auth.token
});
export default connect(mapStateToProps, {signUp})(SignUp);