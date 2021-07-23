import { useState } from "react";
import styled from "styled-components";
import riotIcon from '../assets/images/riot-icon.svg'


function ConfigWindow({handleConfigOpen}) {

    let leagueOfLegendsContent = (
        <>
            <SelectTitle>patchline atual</SelectTitle>
            <Select defaultValue={"live-br"}>
                <option value="live-br">LIVE (BR)</option>
                <option value="pbe">PBE</option>
            </Select>

            <SelectTitle>idioma do jogo</SelectTitle>
            <Select>
                <option>Português</option>
            </Select>
        </>
    )

    let geralContent = (
        <>
            <SelectTitle>idioma do jogo</SelectTitle>
            <Select>
                <option>Português</option>
            </Select>
        </>
    )

    const [currentConfigContent, setCurrentConfigContent] = useState(leagueOfLegendsContent)

    function handleCurrentContent(content) {
        setCurrentConfigContent(content)
    }

    const [isInLeagueOfLegendsContent, setIsInLeagueOfLegendsContent] = useState(true)

    return (
        <Wrapper>
            <About>
                <RiotIcon>
                    <img src={riotIcon} alt="riot icon"></img>
                </RiotIcon>

                <CurrentTitleSection 
                    onClick={() => {handleCurrentContent(geralContent); setIsInLeagueOfLegendsContent(false)}}
                    current={!isInLeagueOfLegendsContent}>
                    geral
                </CurrentTitleSection>

                <CurrentTitleSection 
                    onClick={() => {handleCurrentContent(leagueOfLegendsContent); setIsInLeagueOfLegendsContent(true)}}
                    current={isInLeagueOfLegendsContent}>
                    league of legends
                </CurrentTitleSection>

                <h3>terceiros</h3>
                <h3>v36.0.0</h3>
            </About>

            <Config>
                <ConfigTitle>configurações</ConfigTitle>

                {currentConfigContent}

            </Config>

            <Exit onClick={handleConfigOpen}>
                <ExitButton></ExitButton>
            </Exit>
        </Wrapper>
    )
}

export default ConfigWindow



const Wrapper = styled.div`
    position: absolute;
    top: 0;

    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr minmax(70px,200px);
    grid-template-rows: 1fr;
    z-index: 3;
`

const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: rgb(17,17,17);
    padding: 40px;
    position: relative;
    margin-left: -3px;

    h3 {
        font-size: 10px;
        font-weight: 900;
        text-transform: uppercase;
        color: rgb(126,126,126);
        cursor: pointer;
        position: absolute;

        &:hover {
            color: white;
        }

        &:nth-of-type(1) {
            left: 0;
            bottom: 0;
            margin: 40px;
        }

        &:nth-of-type(2) {
            color: rgba(126,126,126,0.6);
            right: 0;
            bottom: 0;
            margin: 40px;

            &:hover {
                color: rgb(126,126,126);
            }
        }
    }
`

const CurrentTitleSection = styled.h2`
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 900;
    color: ${props => props.current ? 'rgb(209,54,57)' : 'rgb(126,126,126)'};
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
        color: ${props => props.current === false ? 'white' : ''};
    }
`

const Config = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: -3px;

    padding: 40px;
    background-color: rgb(17,17,17);
`

const ExitButton = styled.button`
    display: block;
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
    border: 0;
    outline: 0;
    font-size: 30px;
    color: black;
    position: relative;
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 33px;
        left: 20px;
        width: 30px;
        height: 4px;
        border-radius: 5px;
        transform: rotate(45deg);
        background-color: rgb(126,126,126);
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 33px;
        left: 20px;
        width: 30px;
        height: 4px;
        border-radius: 5px;
        transform: rotate(-45deg);
        background-color: rgb(126,126,126);
    }
`

const Exit = styled.div`
    background-color: rgba(255,255,255,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: rgba(255,255,255,0.1);

        ${ExitButton} {
            &::after {
                background-color: rgb(51,51,51);
            }

            &::before {
                background-color: rgb(51,51,51);
            }
        }
    }
`


const RiotIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(209,54,57);
    border-radius: 50%;
    margin-bottom: 40px;

    img {
        width: 25px;
        height: 25px;
    }
`

const ConfigTitle = styled.h2`
    text-transform: uppercase;
    color: white;
    margin-top: 35px;
    margin-bottom: 50px;
`

const Select = styled.select`
    display: block;
    width: 90%;
    max-width: 300px;
    cursor: pointer;
    height: 40px;
    padding: 10px;
    background-color: rgb(35,35,35);
    color: white;
    outline: 0;
    border: 0;
    margin-bottom: 20px;

    &:hover {
        background-color: rgb(44,44,44);
    }

    &:focus {
        background-color: white;
        color: black;
        font-weight: bold;

        option {
            background-color: white;
            color: black;
            cursor: pointer;
        }
    }

    option {
        color: rgb(206,206,206);
        font-weight: bold;
        cursor: pointer;
    }
`

const SelectTitle = styled.h2`
    font-size: 10px;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    margin: 5px 0;
`