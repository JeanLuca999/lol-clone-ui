import styled from "styled-components";
import WindowContainer from "../components/WindowContainer";
import LoginScreenWallpaper from '../assets/images/lol-wallpaper.svg'
import facebookIcon from '../assets/images/facebook-icon.svg';
import googleIcon from '../assets/images/google-icon.svg';
import appleIcon from '../assets/images/apple-icon.svg';
import lolLogo from '../assets/images/lol-logo.svg';

import { useState } from "react";


function LoginScreen() {

    const [keepLogged, setKeepLogged] = useState(false)

    function handleKeepLogged() {
        setKeepLogged(!keepLogged)
    }

    return(
        <WindowContainer>
            <Wrapper>

                <ElementsContainer>
                    <LolLogo src={lolLogo}></LolLogo>
                    <Title>Fazer login</Title>
                    <Input type="text" placeholder="NOME DE USUÁRIO" content="NOME DE USUÁRIO"></Input>
                    <Input type="password" placeholder="SENHA" content="SENHA"></Input>

                    <IconsWrapper>
                        <Icon>
                          <img src={facebookIcon} alt="facebook"></img>
                        </Icon>
                        <Icon>
                            <img src={googleIcon} alt="google"></img>
                        </Icon>
                        <Icon>
                            <img src={appleIcon} alt="apple"></img>
                        </Icon>
                    </IconsWrapper>

                    <KeepLogged>
                        <CheckBox keepLogged={keepLogged} onClick={handleKeepLogged}></CheckBox> Manter login
                    </KeepLogged>

                </ElementsContainer>
                <BackgroundContainer>

                </BackgroundContainer>
            </Wrapper>
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
`

const ElementsContainer = styled.div`
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
    padding: 5px 0;
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
