import React from 'react';
import './sign-in.styles.scss';
import '../form-input/form-input.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//import sign in with google with firebase
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ 
                email: '',
                password: ''
            })
        } catch (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage)
            }
        } 
    }

    handleChange = (e) => {
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
                    <div class="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton> 
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> 
                            {''}
                            Sign In with Google{''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
