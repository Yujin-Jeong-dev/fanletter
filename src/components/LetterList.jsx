import React from 'react';
import styled from 'styled-components';
import Letter from './Letter';
import LetterForm from './LetterForm';
import { useLetterContext, filterLetters } from 'context/LettersContext';


export default function LetterList() {
    const { letters, filter } = useLetterContext();
    const filtered = filterLetters(letters, filter);
    return (
        <>
            <LetterForm />
            {letters &&
                < StyleLetter >
                    {!filtered.length && <p>{filter === 'All' ? '모두' : filter}에게 남긴 편지가 없습니다. 편지를 작성해주세요! ✏️</p>}
                    {/* 필터링된 편지들을 원래 Letter 컴포넌트에게 props로 전달해줬음.  */}
                    {/* 현재는 context로 필터링된 편지를 받아 매핑해줘야하므로 filterLetter함수를 가져온다.  */}
                    {/* {filtered && filtered.map(letter => <Letter key={letter.id} />)} */}
                    {filtered.length && <Letter />}
                </StyleLetter >
            }
        </>
    );
}

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

// function filterLetters(letters, filter) {
//     if (filter === 'All') return letters;
//     return letters.filter(letter => letter.writedTo === filter);
// }

