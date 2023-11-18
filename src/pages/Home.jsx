import Members from 'components/Members';
import React from 'react';
import styled from 'styled-components';
import LetterList from 'components/LetterList';




export default function Home() {
    //여기서 filters는 전체 필터링하는 기능. 

    // const { filters } = useLetterContext();
    //console.log(filters);
    return (
        <>
            <FlexBox>
                <Members />
                {/* {filters.map((member, idx) => (<Members key={idx} />))} */}
            </FlexBox>
            <LetterList />
        </>
    );
}

const FlexBox = styled.ul`
    display:flex;
    justify-content: center;
    gap:1rem;
    margin-top:1.5rem;
`;
