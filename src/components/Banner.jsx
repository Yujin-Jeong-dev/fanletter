import React from 'react';
import image from '../asset/newjeans.jpg'
import styled from 'styled-components';

const Background = styled.div`
    position: relative;
    width:100%;
    height:38%;
    background-image:url(${image});
    background-size: contain;
`;

const Text = styled.h1`
    position: absolute;
    font-size:3rem;
    color:white;
    top:85%;
    left:50%;
`;




export default function Banner() {
    return (
        <>
            <Background>
                <Text>
                    NewJeans
                </Text>
            </Background>
        </>
    );
}

