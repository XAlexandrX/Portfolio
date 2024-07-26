import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import { Testimony } from './layout/section/testimony/Testimony';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>

        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;


