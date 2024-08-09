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
                <FlexWrapper justify={"space-between"}>
                    <Work title={"Social Network"} 
                        src={socialImg}
                        text={"Text text text"}/>
                    <Work title={"Timer"} 
                        src={TimerImg}
                        text={"Text2 Text2 Text2"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>

    )
}

const StyledWorks =styled.section`

`  ;