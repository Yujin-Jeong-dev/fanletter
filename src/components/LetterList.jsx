import React from 'react';
import styled from 'styled-components';
import Letter from './Letter';
import LetterForm from './LetterForm';


const StyleLetter = styled.ul`
    width:500px;
    display:flex;
    flex-direction: column;
    margin:auto;
    padding:1.5rem;
    gap:1.5rem;
    border-radius: 1rem;
    cursor:pointer;
`;

export default function LetterList({ filters, filter, letters, onAdd }) {
    const filtered = filterLetters(letters, filter);

    return (
        <>
            <LetterForm filters={filters} onAdd={onAdd} />
            {letters &&
                < StyleLetter >
                    {!filtered.length && <p>{filter === 'all' ? '모두' : filter}에게 남긴 편지가 없습니다. 편지를 작성해주세요! ✏️</p>}
                    {filtered && filtered.map(letter => <Letter key={letter.id} letter={letter} />)}
                </StyleLetter >
            }
        </>
    );
}

function filterLetters(letters, filter) {
    if (filter === 'all') return letters;
    return letters.filter(letter => letter.writedTo === filter);
}

