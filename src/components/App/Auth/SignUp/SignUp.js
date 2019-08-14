import React from 'react'
import {reduxForm} from "redux-form";
import style from '../Auth.module.css'
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {signUp} from "../../../../redux/reducers/authReducer";
import {getTranslatedField} from "../AuthUtils";
import {localizeText} from "../../../../utils/translator/Translator";

const SignUpForm = (props) => {
    let loginField = getTranslatedField("login", "text", "loginPlaceholder");
    let passwordField = getTranslatedField("password", "password", "passwordPlaceholder");
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>{loginField}</div>
                <div>{passwordField}</div>
                <div>
                    <button>{localizeText('signUp')}</button>
                </div>
                <NavLink to={'login'}>{localizeText('toSignIn')}</NavLink>
                {props.error !== null ?
                    <div className={style.formError}>
                        {props.error}
                    </div> : ""}
            </form>
        </div>
    )
};

const SignUpFormReduxForm = reduxForm({form: 'signUpForm'})(SignUpForm);

const SignUp = (props) => {
    const onSubmit = (formData) => {
        props.signUp(formData.login, formData.password)
    };

    return (
        props.token ? <Redirect to={"/users"}/> :
            <div className={style.signInWrapper}>
                <div className={style.formHeader}>{localizeText('signUp')}</div>
                <SignUpFormReduxForm onSubmit={onSubmit}/>
            </div>
    )
};
const mapStateToProps = (state) => ({
    token: state.auth.token
});
export default connect(mapStateToProps, {signUp})(SignUp);