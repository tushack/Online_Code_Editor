
import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    //let name = "𝑰𝒏𝒐𝒗𝒐𝑬𝒅𝒊𝒕𝒐𝒓";
    const logo = 'codeicon.png'
    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 40 }} />
                { /* <h1>{name}  </h1> */}

            </Toolbar>
        </Container>
    )
}

export default Header