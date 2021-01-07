import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { DivFormContainer, CustomFormContainer, CustomLabel, CustomInput, CustomTextArea } from './contact.component.styles';
import { CustomButtonContainer } from '../../components/custom-button/custom-button.styles';
const ContactPage = ({ currentUser }) => {
    console.log(currentUser)
    return (
        <DivFormContainer>
            {
                currentUser
                ? <CustomFormContainer data={currentUser}>
                    <CustomLabel>Name:</CustomLabel>
                    <CustomInput type='text' /> 
                    <CustomLabel>Email:</CustomLabel>
                    <CustomInput type='text' /> 
                    <CustomLabel>Info:</CustomLabel>
                    <CustomTextArea rows="4" cols="50" />
                    <CustomButtonContainer>Submit</CustomButtonContainer>
                </CustomFormContainer>
                : <CustomFormContainer>
                    <CustomLabel>Name:</CustomLabel>
                    <CustomInput type='text' /> 
                    <CustomLabel>Email:</CustomLabel>
                    <CustomInput type='text' /> 
                    <CustomLabel>Info:</CustomLabel>
                    <CustomTextArea rows="4" cols="50" />
                    <CustomButtonContainer>Submit</CustomButtonContainer>

                </CustomFormContainer>
            }
        </DivFormContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})




export default connect(mapStateToProps, null)(ContactPage);