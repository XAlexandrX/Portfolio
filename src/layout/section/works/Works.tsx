import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { HeaderMenu } from '../../../components/menu/Menu';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/Work.png';
import TimerImg from './../../../assets/images/Work1.png';

const worksItems =["All", "Landing page", "Rect", "Spa" ]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <HeaderMenu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"} 
                      src={socialImg}
                      text={"Text text text"}/>
                <Work title={"Timer"} 
                    src={TimerImg}
                    text={"Text2 Text2 Text2"}/>
            </FlexWrapper>
        </StyledWorks>

    )
}

const StyledWorks =styled.section`
    min-height: 100vh;
    background-color: #787378;
`  ;