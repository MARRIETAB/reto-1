import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InputStyled, FormControlStyled, FormStyled, LoginRegText1Styled, LoginRegText2Styled, InputEmailStyled, InputPasswordStyled, InputNameStyled, InputPhoneStyled } from '../styles/Styles';


export default function Login() {
  const navigate = useNavigate();
  const navigateToLogin = () =>{
      navigate('/Login');
  };

  return (
    <FormStyled>
        <LoginRegText1Styled>Create new Account</LoginRegText1Styled>
        <LoginRegText2Styled>Create a new account by filling in all the fields or log in to an existing account</LoginRegText2Styled>
      <FormControlStyled>        
          <InputNameStyled type="Name" placeholder='Name' />
          <InputEmailStyled type="Email" placeholder='Email' />
          <InputPhoneStyled type="Phone" placeholder='Phone' />
          <InputPasswordStyled type="Password" placeholder='Password' />
      </FormControlStyled>
          <InputStyled onClick={navigateToLogin} type="submit" value="Create"/>
    </FormStyled>
  )
}
