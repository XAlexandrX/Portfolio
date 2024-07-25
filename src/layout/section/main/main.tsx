import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/Photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span></span>
                    <h2>I am Aleksandr Limarenko</h2>
                    <MainTitle>A Web Developer</MainTitle>
                </div>

                <Photo src={photo} alt="#"/>
            </FlexWrapper>
        </StyledMain>




        
    );
};

const StyledMain = styled.div `
    min-height: 100vh;
    background-color: #7e5858;


`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    
`

const MainTitle =styled.h1`
    
`

const Name =styled.h2`
    
`