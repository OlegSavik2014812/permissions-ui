import React from 'react'
import {Field, reduxForm} from "redux-form";
import style from '../Auth.module.css'
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {signIn} from "../../../../redux/reducers/authReducer";
import {Translate} from "react-translated";

const localize = (key) => <Translate text={key}/>;

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"input"} name={"login"} placeholder={localize('loginPlaceholder')}/>
                </div>
                <div>
                    <Field component={"input"} name={"password"} type={"password"}
                           placeholder={localize('passwordPlaceholder')}/>
                </div>
                <div>
                    <button>{localize('signIn')}</button>
                </div>
                {props.error !== null ?
                    <div className={style.formError}>
                        {props.error}
                    </div> : ""}
            </form>
            <NavLink to={'signUp'}>{localize('toSignUp')}</NavLink>
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
                <div className={style.formHeader}>{localize('signIn')}</div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
    )
};
const mapStateToProps = (state) => ({
    token: state.auth.token
});
export default connect(mapStateToProps, {signIn})(Login);