import React from 'react';
import styled from 'styled-components';
import { FaFacebookFa } from 'react-icons/fa';
import InputEl from '../components/InputEl';

function Loginpage() {
    return (
        <Maincontainer>
            <Headingcontainer>
                Welcome
            </Headingcontainer>
            <Inputcontainer>
                <InputEl type={"text"} placeholder={"Email"} />

                <InputEl type="password" placeholder={"Password"} />
            </Inputcontainer>
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

export default Loginpage