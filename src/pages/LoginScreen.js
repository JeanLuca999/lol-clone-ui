import styled from "styled-components";
import WindowContainer from "../components/WindowContainer";
import LoginScreenWallpaper from '../assets/images/lol-wallpaper.svg'
import facebookIcon from '../assets/images/facebook-icon.svg';
import googleIcon from '../assets/images/google-icon.svg';
import appleIcon from '../assets/images/apple-icon.svg';
import lolLogo from '../assets/images/lol-logo.svg';
import rightArrow from '../assets/images/right-arrow.svg';
import rightArrowActive from '../assets/images/right-arrow-active.svg';
import configIcon from '../assets/images/config-icon.svg';
import ConfigWindow from "../components/ConfigWindow";

import { useState } from "react";


function LoginScreen() {

    const [keepLogged, setKeepLogged] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isConfigOpen, setIsConfigOpen] = useState(false)

    function handleKeepLogged() {
        setKeepLogged(!keepLogged)
    }

    function handleUserName(event) {
        setUserName(event.target.value)
    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function handleConfigOpen() {
        setIsConfigOpen(!isConfigOpen)
    }

    let configOpen = isConfigOpen ? <ConfigWindow handleConfigOpen={handleConfigOpen}></ConfigWindow> : ''

    return(
        <WindowContainer>
            <Wrapper>

                <ElementsContainer>
                    <LolLogo src={lolLogo}></LolLogo>
                    <Title>Fazer login</Title>
                    <Input
                        type="text"
                        placeholder="NOME DE USUÁRIO"
                        content="NOME DE USUÁRIO"
                        onChange={(e) => handleUserName(e)}
                    ></Input>
                    <Input
                        type="password"
                        placeholder="SENHA"
                        content="SENHA"
                        onChange={(e) => handlePassword(e)}
                    ></Input>

                    <IconsWrapper>
                        <Icon>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img src={facebookIcon} alt="facebook"></img>
                            </a>
                        </Icon>
                        <Icon>
                            <a href="https://mail.google.com" target="_blank" rel="noreferrer">
                                <img src={googleIcon} alt="google"></img>
                            </a>
                        </Icon>
                        <Icon>
                            <a href="https://secure2.store.apple.com/" target="_blank" rel="noreferrer">
                                <img src={appleIcon} alt="apple"></img>
                            </a>
                        </Icon>
                    </IconsWrapper>

                    <KeepLogged>
                        <CheckBox keepLogged={keepLogged} onClick={handleKeepLogged}></CheckBox> Manter login
                    </KeepLogged>
                    {
                        (password && userName) ? <ButtonLoginActive><img src={rightArrowActive} alt="right arrow"></img></ButtonLoginActive>
                        : <ButtonLogin><img src={rightArrow} alt="right arrow"></img></ButtonLogin>
                    }

                    <HelpSection>
                        <h3>Não Consegue Iniciar Sessão?</h3>
                        <h3>Criar Conta</h3>
                        <Version>v 36.0.0</Version>
                    </HelpSection>

                </ElementsContainer>
                <BackgroundContainer>
                    <Nav>
                        <NavItem active={true}></NavItem>
                        <NavItem>?</NavItem>
                        <NavItem>X</NavItem>
                    </Nav>
                    <ConfigIcon onClick={handleConfigOpen} isConfigOpen={isConfigOpen}>
                        <img src={configIcon} alt="config"></img>
                    </ConfigIcon>
                </BackgroundContainer>
            </Wrapper>
            {configOpen}
        </WindowContainer>
    )
}

export default LoginScreen;


const LolLogo = styled.img`
    object-fit: contain;
    object-position: center;
    margin-bottom: 70px;
`


const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;
`

const ElementsContainer = styled.div`
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const BackgroundContainer = styled.div`
    background-image: url('${LoginScreenWallpaper}');
    background-size: cover;
    background-position: center;
    background-color: rgb(17,17,17);
    height: 100%;
    width: 100%;
    position: relative;
`

const Title = styled.h1`
    font-weight: 800;
    font-size: 24px;
    letter-spacing: -1px;
    margin-bottom: 32px;
`

const Input = styled.input`
    width: 288px;
    height: 47px;
    background-color: rgb(237,237,237);
    display: block;
    outline: 0;
    border: none;
    margin-bottom: 16px;
    padding-left: 10px;
    border-radius: 5px;

    font-weight: 800;
    font-size: 16px;

    &::placeholder {
        font-weight: 900;
        font-size: 10.5px;
        color: rgb(153,153,153);
        letter-spacing: 0.5px;
    }

    &:hover {
        background-color: rgb(231,231,231);

        &::placeholder {
            color: rgb(150,150,150);
        }
    }

    &:focus {
        border: 2px solid black;
        background-color: transparent;
        position: relative;

        &::placeholder {
            position: absolute;
            top: 2px;
            left: 10px;
            font-size: 9px;
        }
    }
`

const IconsWrapper = styled.div`
    width: 285px;
    display: flex;
    margin-top: 14px;
`

const Icon = styled.div`
    flex-grow: 1;
    background-color: black;
    text-align: center;
    padding-top: 7px;
    padding-bottom: 4px;
    margin-left: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:nth-child(1) {
        margin-left: 0;
        background-color: rgb(24,119,242);

        &:hover {
            background-color: rgb(9,102,222);
        }
    }

    &:nth-child(2) {
        background-color: #fff;
        border: 1px solid lightgray;

        &:hover {
            background-color: rgb(247,247,247);
        }
    }

    &:nth-child(3) {
        &:hover {
            background-color: rgb(20,20,20);
        }
    }

    img {
        width: 20px;
        height: 20px;
    }

    a {
        display: block;
    }
`

const KeepLogged = styled.div`
    width: 288px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    
    font-weight: 800;
    letter-spacing: 0.5px;
    color: rgb(153,153,178);

    &:hover {
        color: rgb(126,126,126);
    }
`

const CheckBox = styled.button`
    width: 17px;
    height: 17px;
    background-color: ${ props => props.keepLogged ? 'rgb(209,54,57)' : 'rgb(237,237,237)'};
    border: 0;
    outline: 0;
    cursor: pointer;
    margin-right: 5px;
    position: relative;

    &::after {
        content: '✓';
        color: white;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        position: absolute;
        width: 5px;
        height: 5px;
        top: 0;
        left: 3px;
        display: ${ props => props.keepLogged ? 'block' : 'none'};
    }
`

const ButtonLogin = styled.button`
    width: 65px;
    height: 65px;
    border-radius: 20px;
    border: 2px solid rgb(232,232,232);
    background-color: transparent;
    margin-top: 103px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        display: block;
        width: 32px;
        height: 32px;
    }
`

const ButtonLoginActive = styled(ButtonLogin)`
    background-color: rgb(209,54,57);
    cursor: pointer;

    &:hover {
        background-color: rgb(188,37,42);
    }
`

const HelpSection = styled.div`
    width: 288px;
    position: relative;
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    h3 {
        display: inline-block;
        text-transform: uppercase;
        font-size: 10px;
        text-align: center;
        color: rgb(178,178,178);
        font-weight: 900;
        cursor: pointer;
        margin-bottom: 5px;

        &:hover, &:focus {
            color: rgb(17,17,17);
        }
    }
`

const Version = styled.h3`
    position: absolute;
    right: 0;
    margin-top: 20px;
    &:hover, &:focus {
        color: rgb(142,126,126) !important;
    }
`

const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

const NavItem = styled.button`
    background-color: transparent;
    color: white;
    font-size: 16px;
    border: 0;
    border-radius: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: relative;
    z-index: 4;
    &:hover {
        background-color: rgba(255,255,255,0.1);
    }
    &:nth-child(1) {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.active ? 'rgba(255,255,255,0.1)' : '' };
        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 10px;
            height: 1px;
            background-color: white;
        }
    }
    &:nth-child(3) {
        &:hover {
            background-color: rgb(209,54,57);
        }
    }
`

const ConfigIcon = styled.div`
    display: ${props => props.isConfigOpen === false ? 'flex' : 'none'};
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: rgba(255,255,255,0.4);
    justify-content: center;
    align-items: center;
    cursor: pointer;

    position: absolute;
    bottom: 20px;
    right: 20px;

    &:hover {
        background-color: rgba(255,255,255,0.6);
    }
`