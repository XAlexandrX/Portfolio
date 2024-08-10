import React from 'react';
import styled from 'styled-components';




export const TabMenu = (props: {menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
        <ul>
            {props.menuItems.map((item :string , index :number)=>{
                return <ListItem key={index}>
                    <Link href="">{item}</Link>
                    </ListItem>
            })}
        </ul>
    </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav `
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

`

const ListItem = styled.li `

`

const Link = styled.a `
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;

`