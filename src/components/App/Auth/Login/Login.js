import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {signIn} from "../../../../redux/reducers/authReducer";
import {localizeText} from "../../../../utils/translator/Translator";
import avatar from "../../../../assets/images/avatar-01.jpg";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Input} from "../AuthUtils";

const LoginForm = (props) => {
    return (
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

                        <div className="wrap-input100 validate-input m-t-85 m-b-35" data-validate="Enter username">
                            <Field className="input100" type="text" name="username" component={Input}
                                   textVal='login'
                                   validate={[requiredField, minLength5, maxLength255]}/>
                        </div>

                        <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                            <Field className="input100" type="password" name="password"
                                   textVal='password' component={Input}
                                   validate={[requiredField, minLength5, maxLength255]}/>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" onClick={props.submit}>
                                {localizeText('signIn')}
                            </button>
                        </div>

                        <ul className="login-more p-t-190">
                            <li className="m-b-8">
							<span className="txt1">
                                {localizeText('forgot')}
							</span>
                                <a href="#" className="txt2">
                                    {localizeText('username_or_password')}
                                </a>
                            </li>

                            <li>
							        <span className="txt1">
                                        {localizeText('dont_have_an_account')}
							        </span>
                                <NavLink to={'signUp'} className="txt2">
                                    {localizeText('signUp')}
                                </NavLink>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const minLength5 = minLengthCreator(5);
const maxLength255 = maxLengthCreator(255);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.signIn(formData.username, formData.password)
    };
    return (
        props.token ? <Redirect to={"/users"}/> :
            <div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
    )
};
const mapStateToProps = (state) => ({
    token: state.auth.token
});
export default connect(mapStateToProps, {signIn})(Login);