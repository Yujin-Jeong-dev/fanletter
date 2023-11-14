import React from 'react';
import styled from 'styled-components';


const StyleButton = styled.button`
    width:5rem;
    height:2rem;
    font-size: 1rem;
    color:white;
    padding:0.5rem;
    background-color: #83bcff;
    
     &:hover{
        transform:scale(1.1);
     }
`;

export default function Button({ text }) {

    return (
        <StyleButton>{text}</StyleButton>
    );
}

