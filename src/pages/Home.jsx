
import LetterForm from 'components/LetterForm';
import Members from 'components/Members';
import React, { useState } from 'react';
import styled from 'styled-components';
import LetterList from 'components/LetterList';


const FlexBox = styled.ul`
    display:flex;
    justify-content: center;
    gap:1rem;
    margin-top:1.5rem;
`;




const filters = ['all', '민지', '하니', '다니엘', '해린', '혜인'];

export default function Home() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <>
            <LetterForm filters={filters} />
            <FlexBox>
                {filters.map((member, idx) => (<Members key={idx} member={member} filter={filter} onFilterChange={filter => setFilter(filter)} />))}
            </FlexBox>
            <LetterList filter={filter} />
        </>
    );
}

