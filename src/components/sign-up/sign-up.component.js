import React, { useState } from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


const SignUp = () => {

    const [ userCredentials, setUserCredentials ] = useState(
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    )
    
     const handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = userCredentials;

        if(password !== confirmPassword) {
            alert('password dont match!');
            return
        }
        try {
            // 1. create the user (user will be a authuser object)
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            // 2. store the user to filestore
            await createUserProfileDocument(user, {displayName})
            // 3. if success create the user, we clear the form/state
            setUserCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/email-already-in-use') {
                alert("Email already registered!")
            } else if (errorCode == 'auth/operation-not-allowed') {
                alert('Firebase not enable the email/account registration!')
            } else {
                console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserCredentials({
            ...userCredentials, [name]: value
        })
    }

    const {displayName, email, password, confirmPassword} = userCredentials;
    return (
        <div class="sign-up">
            <h2 class="title">I do not have an account!</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-from" onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName'
                    type='text'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput 
                    name='email'
                    type='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput 
                    name='password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput 
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton> 
            </form>
        </div>
    )
}

export default SignUp;
