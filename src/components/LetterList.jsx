import React, { useState } from 'react';
import fakeLetter from 'letters/fakeData.json';
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
    /* background-color:#abc4ff; */
    cursor:pointer;
`;

export default function LetterList({ filters, filter }) {
    const [letters, setLetters] = useState(fakeLetter);
    const filtered = filterLetters(letters, filter);

    const handleAdd = (letter) => {
        console.log(filter, filtered);
        setLetters([...letters, letter])
    }


    return (
        <>
            <LetterForm filters={filters} onAdd={handleAdd} />
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

