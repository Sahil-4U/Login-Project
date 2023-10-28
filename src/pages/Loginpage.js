import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter, } from 'react-icons/fa';
import InputEl from '../components/InputEl';
import Button from '../components/Button';
import Icon from '../components/Icons';

function Loginpage() {
    // Background color for Icons
    const FacebookBackground =
        "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const InstagramBackground =
        "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
        "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    return (
        <Maincontainer>
            <Headingcontainer>
                Welcome
            </Headingcontainer>
            <Inputcontainer>
                <InputEl type={"text"} placeholder={"Email"} />
                <InputEl type="password" placeholder={"Password"} />
            </Inputcontainer>
            <ButtonContainer>
                <Button content="Sign Up" />
            </ButtonContainer>
            <LoginWith>OR LOGIN WITH</LoginWith>
            <HorizontalRule />
            <IconsContainer>
                <Icon color={FacebookBackground}>
                    <FaFacebookF />
                </Icon>
                <Icon color={InstagramBackground}>
                    <FaInstagram />
                </Icon>
                <Icon color={TwitterBackground}>
                    <FaTwitter />
                </Icon>
            </IconsContainer>
            <ForgotPassword>Forgot Password ?</ForgotPassword>
        </Maincontainer>
    )
}

const Maincontainer = styled.div`
display: flex;
align-items:center;
flex-direction:column;
height:75vh;
width:30vw;
background:rgba(255,255,255,0.20);
border-radius:10px;
box-shadow: 0 28px 30px 0 rgba(32,32,132,0.40);
backdrop-filter: blur(8px);
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.2rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const Headingcontainer = styled.h1`
  margin:3rem 0 2rem 0;
`;

const Inputcontainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 22%;
width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Loginpage