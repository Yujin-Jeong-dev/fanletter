import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLetterContext, filterLetters } from 'context/LettersContext';



export default function Letter() {
    const { letters, filter } = useLetterContext();
    const filtered = filterLetters(letters, filter);
    //필터링된 영화가 있으면 보여줌
    const navigate = useNavigate();
    return (
        <>
            {filtered.map(letter => {
                const { id, avatar, writedTo, content, nickname, createdAt } = letter;
                return <Li key={id} onClick={() => navigate(`letterDetail/${id}`, { state: { letter } })}>
                    <Div>
                        <img src={avatar} alt='avatar' />
                        <Div3>
                            <h3>To. {writedTo}</h3>
                            <p>{content}</p>
                        </Div3>
                    </Div>
                    <Div2>
                        <p>{nickname}</p>
                        <time>{new Date(createdAt).toLocaleString()}</time>
                    </Div2>
                </Li >
            })}
        </>
    );
}

const Div = styled.div`
    display: flex;
    img{
    width:60px;
    height: 60px;
    border-radius: 50%;
    object-fit:cover;
    }
    
`;


const Div2 = styled(Div)`
    justify-content: space-between;
    margin-top:0.5rem;
    p{
        padding:0.5rem;
        color:#dad7cd;
        font-weight: bold;
    }
`

const Div3 = styled(Div)`
    flex-direction: column;
    h3{
        margin-bottom: 0.5rem;
    }

    p{   
    width:270px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align:start;
    padding:0.5rem 1rem;
    }

   
`;

const Li = styled.li`
    padding:2rem;
    border:1px solid #f8f7ff;
    border-radius: 1rem;
    transition: transform 3ms ease-in;
    
     &:hover{
        transform: scale(1.1);
     }
`;

