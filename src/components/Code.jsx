import { useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IconName } from "react-icons/si";

//components
import Editor from './Editor';

import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    background-color: #060606;
    hheight: 50vh;
    display: flex;
`

const Code = () => {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor 
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                icon= <AiIcons.AiFillHtml5 />
                color='#FF3C41'
            />
            <Editor 
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon=<IoIcons.IoLogoCss3/>
                color='#FFFF00'
            />
            <Editor 
                language="javascript"
                heading="JS"
                value={js}
                onChange={setJs}
                icon=<FaIcons.FaReact />
                color= '#0EBEFF'
            />
        </Container>
    )
}

export default Code;