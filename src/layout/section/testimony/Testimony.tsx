import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { SectionTitle } from '../../../components/SectionTitle';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconWrapper } from '../skills/skill/Skill';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align="center">
                <IconWrapper>
                    <Icon iconId={"quote"}/>
                </IconWrapper>
                <Slider />
            </FlexWrapper>

        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    background-color: #675e65;
    min-height:60vh;

    ${IconWrapper} {
        margin: 52px 0 72px;
    }
`