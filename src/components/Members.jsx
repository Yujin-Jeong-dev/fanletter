import React from 'react';
import styled from 'styled-components';

const StyleLi = styled.li`
    width:80px;
    height:40px;
    font-size:1.2rem;
    color:white;
    padding:0.6rem 0.3rem;
    border-radius:3rem;

    &:hover{
        transform:scale(1.1);
     }

    background-color: ${props => props.$active === props.children ? '#8093f1' : '#83bcff'};
`;

export default function Members({ member, active }) {

    return (
        <StyleLi $active={active}>
            {member}
        </StyleLi>
    );
}

