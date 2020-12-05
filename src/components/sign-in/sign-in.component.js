import React, { useState } from 'react';
import './sign-in.styles.scss';
import '../form-input/form-input.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//import sign in with google with firebase
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [ userCredentials, setCredentials ] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = userCredentials;
        try {
            await auth.signInWithEmailAndPassword(email, password);

            setCredentials({
                email: '',
                password: ''
            })
            alert("U are successed sign in!")
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

    const handleChange = (e) => {
        let { value, name } = e.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div class="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={userCredentials.email} 
                    handleChange={handleChange} required />

                
                <FormInput 
                    name='password' 
                    type='password'
                    label='Password' 
                    value={userCredentials.password} 
                    handleChange={handleChange} required />
                <div class="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton> 
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> 
                        Sign In with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
