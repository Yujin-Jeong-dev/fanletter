import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'ui/Button';
import { SlEnvolopeLetter } from 'react-icons/sl'

const Detail = styled.div`
    width:800px;
    min-height: 400px;
    margin:2rem auto;
    padding:2rem;
    background-color: #b8b8ff;
    border-radius: 1rem;
    
    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    img{
        width:5rem;
        height:5rem;
        border-radius:50%;
        margin-right:0.5rem;
    }
    span{
        font-size:2rem;
        font-weight: bold;
    }

    p{
        font-size: 1.5rem;
    }
 
`;

const Avatar = styled.div`
    display:flex;
    align-items: center;
`;

const WriteTo = styled.p`
    height:3rem;
    color: rgb(82 82 91);
    padding-top:1rem;
    background-color:#ffeedd;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`

const Content = styled.p`
    height:200px;
    background-color:pink;
    padding:1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius:1rem;
    margin-bottom: 1rem;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap:1rem;
`

export default function LetterDetail() {
    const location = useLocation();
    const { avatar, content, createdAt, nickname, writedTo } = location.state;
    return (
        <Detail>
            <header>

                <Avatar>
                    <img src={avatar} alt='avatar' />
                    <span>{nickname}</span>
                </Avatar>
                <time>{createdAt}</time>
            </header>

            <WriteTo><SlEnvolopeLetter /> TO. {writedTo}</WriteTo>
            <Content>{content}</Content>
            <Buttons>
                <Button text="수정" />
                <Button text="삭제" />
            </Buttons>
        </Detail>
    );
}

