import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"code"}
                    title={"html5"} description={"lorem  lorem lorem"}/>
                <Skill iconId={"css"} 
                    title={"css3"} description={"lorem lorem lorem"}/>
                <Skill iconId={"react"}
                    title={"react"} description={"lorem lorem lorem"}/>
                <Skill iconId={"typeScript"}
                    title={"typescript"} description={"lorem  lorem lorem"}/>
                <Skill iconId={"styledComponents"} 
                    title={"styled components"} description={"lorem lorem lorem"}/>
                <Skill iconId={"figma"}
                    title={"web desing"} description={"lorem lorem lorem"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #9c9df5;
    min-height: 100vh;
`