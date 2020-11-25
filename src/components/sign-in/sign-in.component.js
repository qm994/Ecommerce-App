import React from 'react';
import './sign-in.styles.scss';

import '../form-input/form-input.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ 
            email: '',
            password: ''
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        let { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div class="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email} 
                        handleChange={this.handleChange} required />

                    
                    <FormInput 
                        name='password' 
                        type='password'
                        label='Password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} required />

                    <CustomButton type='submit'> Sign In </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
