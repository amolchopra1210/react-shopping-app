import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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
                    <CustomButton type = "submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
