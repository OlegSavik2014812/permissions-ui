import React from 'react'
import {Field, reduxForm} from "redux-form";
import style from '../Auth.module.css'
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {signUp} from "../../../../redux/reducers/authReducer";

const SignUpForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"input"} name={"login"} placeholder={"Login"}/>
                </div>
                <div>
                    <Field component={"input"} name={"password"} type={"password"}
                           placeholder={"Password"}/>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
                <NavLink to={'login'}>To sign in</NavLink>
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
                <div className={style.formHeader}>Sign In</div>
                <SignUpFormReduxForm onSubmit={onSubmit}/>
            </div>
    )
};
const mapStateToProps = (state) => ({
    token: state.auth.token
});
export default connect(mapStateToProps, {signUp})(SignUp);