import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

    state = {
        email : '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email : '',
            password : ''
        })
    }
    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div className = "sign-in">
                <h2 className = "title">I already have an account</h2>
                <span className = "title">Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput name = "email" type = "email" label = "Email" value = {this.state.email} handleChange = {this.handleChange} required/>
                    <FormInput name = "password" type = "password" label = "Password" value = {this.state.password} handleChange = {this.handleChange} required/>
                    <div className="buttons">
                        <CustomButton type = "submit">Sign In</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
