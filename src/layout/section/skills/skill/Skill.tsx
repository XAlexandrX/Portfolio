import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"
import { FlexWrapper } from "../../../../components/FlexWrapper"

type SkillPropsType={
    iconId: string
    title: string
    description: string

}

export const Skill =(props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>

        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
`

const SkillText = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;


`

