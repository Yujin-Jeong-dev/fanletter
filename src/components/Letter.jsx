import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Div = styled.div`
    display: flex;
    img{
    width:60px;
    height: 60px;
    border-radius: 50%;
    object-fit:cover;
    }
    p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding:0.6rem;
    }
`;


const Div2 = styled(Div)`
    justify-content: space-between;
    margin-top:0.5rem;
`


const Li = styled.li`
    padding:2rem;
    border:1px solid #f8f7ff;
    border-radius: 1rem;
    transition: transform 3ms ease-in;
    
     &:hover{
        transform: scale(1.1);
     }
`

export default function Letter({ letter }) {
    //특정 멤버를 클릭하면 해당 멤버로 필터 
    const { avatar, content, createdAt, nickname, id } = letter;

    const navigate = useNavigate();
    return (
        <Li onClick={() => navigate(`letterDetail/${id}`, { state: { letter } })}>
            <Div>
                <img src={avatar} alt='avatar' />
                <p>{content}</p>
            </Div>
            <Div2>
                <p>{nickname}</p>
                <time>{new Date(createdAt).toLocaleString()}</time>
            </Div2>
        </Li >
    );
}

