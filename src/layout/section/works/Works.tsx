import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/Work.png';
import TimerImg from './../../../assets/images/Work1.png';
import { Container } from '../../../components/Container';

const worksItems =["All", "Landing page", "Rect", "Spa" ]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work title={"Social Network"} 
                        src={socialImg}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Work title={"Timer"} 
                        src={TimerImg}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>

    )
}

const StyledWorks =styled.section`

`  ;