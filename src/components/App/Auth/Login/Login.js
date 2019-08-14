import React from 'react'
import {reduxForm} from "redux-form";
import style from '../Auth.module.css'
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {signIn} from "../../../../redux/reducers/authReducer";
import Button from "@material-ui/core/Button";
import {localizeText} from "../../../../utils/translator/Translator";
import {getTranslatedField} from "../AuthUtils";

const LoginForm = (props) => {
    let loginField = getTranslatedField("login", "text", "loginPlaceholder");
    let passwordField = getTranslatedField("password", "password", "passwordPlaceholder");
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    {loginField}
                </div>
                <div>
                    {passwordField}
                </div>
                <div>
                    <Button href={""} onClick={props.submit}>{localizeText('signIn')}</Button>
                </div>
                {props.error !== null ?
                    <div className={style.formError}>
                        {props.error}
                    </div> : ""}
            </form>

            <Button href={""}><NavLink to={'signUp'}>{localizeText('toSignUp')}</NavLink></Button>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.signIn(formData.login, formData.password)
    };

    return (
        props.token ? <Redirect to={"/users"}/> :
            <div className={style.signInWrapper}>
                <div className={style.formHeader}>{localizeText('signIn')}</div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
    )
};
const mapStateToProps = (state) => ({
    token: state.auth.token
});
export default connect(mapStateToProps, {signIn})(Login);