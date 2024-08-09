import React from 'react';
import styled from 'styled-components';




export const HeaderMenu = (props: {menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
        <ul>
            {props.menuItems.map((item :string , index :number)=>{
                return <ListItem key={index}>
                    <Link href="">{item}</Link>
                    </ListItem>
            })}
        </ul>
    </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav `
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

`

const ListItem = styled.li `

`

const Link = styled.a `
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 50px;
    text-align: center;
    color: #7572d5;
`