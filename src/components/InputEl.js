import React from 'react';
import styled from 'styled-components';

function InputEl(props) {
    return (
        <InputEL type={props.type} placeholder={props.placeholder} />
    )
}

const InputEL = styled.input`
background: rgba(255,255,255,0.15);
box-shadow: 0 8px 35px 0 rgba(30,35,135,.5);
border-radius: 2rem;
width: 80%;
height: 3rem;
padding: 1rem;
border: none;
outline: none;
 font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export default InputEl