import React, { useState } from 'react';
import fakeLetter from 'letters/fakeData.json';
import styled from 'styled-components';
import Letter from './Letter';


const StyleLetter = styled.ul`
    width:500px;
    display:flex;
    flex-direction: column;
    margin:auto;
    padding:1.5rem;
    gap:1.5rem;
    border-radius: 1rem;
    /* background-color:#abc4ff; */
    cursor:pointer;
`;

export default function LetterList({ filter }) {
    const [letters, setLetters] = useState(fakeLetter);
    const filtered = filterLetters(letters, filter);

    return (
        <>
            {letters &&
                < StyleLetter >
                    {filtered.map(letter => <Letter key={letter.id} letter={letter} />)}
                </StyleLetter >
            }
        </>
    );
}

function filterLetters(letters, filter) {
    if (filter === 'all') return letters;
    return letters.filter(letter => letter.writedTo === filter);
}

