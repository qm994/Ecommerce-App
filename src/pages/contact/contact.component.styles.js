import styled, { css } from 'styled-components';


export const DivFormContainer = styled.div`
    height: 700px;
    border: 3px solid red;
    width: 600px;
    margin: 50px;
`;

export const CustomFormContainer = styled.form`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
`;

export const CustomLabel = styled.label`
   padding-left: 30px;
   color: black !important;
   font-size: 20px;
   width: 50%;  
`

export const CustomInput = styled.input`
   height: 35px;
   width: 50%;
`;

export const CustomTextArea = styled.textarea`

`;



