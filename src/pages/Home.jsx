
import LetterForm from 'components/LetterForm';
import Members from 'components/Members';
import React, { useState } from 'react';
import styled from 'styled-components';

const FlexBox = styled.ul`
    display:flex;
    justify-content: center;
    gap:1rem;
    margin-top:1.5rem;
`;


export default function Home() {
    const members = ['민지', '하니', '다니엘', '해린', '혜인'];
    const [active, setActive] = useState(members[0]);
    const handleClick = (e) => {
        setActive(e.target.innerHTML);
        console.log(e.target.$active);
    }
    return (
        <>
            <FlexBox onClick={handleClick}>
                {members &&
                    members.map((member, idx) => (<Members key={idx} member={member} active={active} />))}
            </FlexBox>
            <LetterForm members={members} />
        </>
    );
}

