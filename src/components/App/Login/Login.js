import React from 'react'
import {Field, reduxForm} from "redux-form";
import style from './Login.module.css'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {signIn} from "../../../redux/reducers/authReducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} type={"password"}
                       placeholder={"Password"}/>
            </div>
            <div>
                <button>Login</button>
            </div>
            {props.error !== null ?
                <div className={style.formError}>
                    {props.error}
                </div> : ""}
        </form>
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
                <div className={style.formHeader}>Sign In</div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
    )
};
const mapStateToProps = (state) => ({
    token: state.auth.token
});
export default connect(mapStateToProps, {signIn})(Login);