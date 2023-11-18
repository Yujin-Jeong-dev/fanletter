import React from 'react';
import styled from 'styled-components';
import { useLetterContext } from 'context/LettersContext';


export default function Members() {
    //원래 Home에서 filters에서 순회하면서 all부터 해인까지 목록을 만드는 거였음. 
    //그런데 filters.map에서 하나의 요소를 props로 전달받아왔었음. props로 전달받지 않기 위해 여기서 filters를 받고 filters.map순회를 해주자. 
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

