import styled from "styled-components";
import WindowContainer from "../components/WindowContainer";
import LoginScreenWallpaper from '../assets/images/lol-wallpaper.svg'

function LoginScreen() {
    return(
        <WindowContainer>
            <Wrapper>
                <ElementsContainer>
                    <h1>Fazer Login</h1>
                </ElementsContainer>
                <BackgroundContainer>

                </BackgroundContainer>
            </Wrapper>
        </WindowContainer>
    )
}

export default LoginScreen;


const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const ElementsContainer = styled.div`
    padding: 50px 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-grow: 1;
`

const BackgroundContainer = styled.div`
    background-image: url('${LoginScreenWallpaper}');
    background-size: cover;
    background-position: center;
    width: 60%;
    height: 100%;
    flex-grow: 1;
    max-width: 880px;
`