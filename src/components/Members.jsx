import React from 'react';
import styled from 'styled-components';
import { useLetterContext } from 'context/LettersContext';


export default function Members() {
    const { filters, filter, onFilterChange } = useLetterContext();
    return (
        <>
            {filters.map((member, idx) => (<StyleLi key={idx} $filter={filter} onClick={() => onFilterChange(member)}>{member}</StyleLi>))}
        </>
    );
}

const StyleLi = styled.li`
    width:80px;
    height:40px;
    font-size:1.2rem;
    color:white;
    padding:0.6rem 0.3rem;
    border-radius:3rem;
    cursor:pointer;

    &:hover{
        transform:scale(1.1);
     }

    background-color: ${props => props.$filter === props.children ? '#8093f1' : '#83bcff'};
`;

