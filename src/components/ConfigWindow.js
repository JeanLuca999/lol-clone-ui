import styled from "styled-components";
import riotIcon from '../assets/images/riot-icon.svg'


function ConfigWindow() {

    return (
        <Wrapper>
            <About>
                <RiotIcon>
                    <img src={riotIcon} alt="riot icon"></img>
                </RiotIcon>
                <h2>geral</h2>
                <h2>league of legends</h2>
            </About>

            <Config>
                <ConfigTitle>configurações</ConfigTitle>

                <SelectTitle>patchline atual</SelectTitle>
                <Select>
                    <option>LIVE (BR)</option>
                    <option>PBE</option>
                </Select>

                <SelectTitle>idioma do jogo</SelectTitle>
                <Select>
                    <option>Português</option>
                </Select>
            </Config>
        </Wrapper>
    )
}

export default ConfigWindow

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 400px;
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

    h2 {
        font-size: 17px;
        text-transform: uppercase;
        font-weight: 900;
        color: rgb(126,126,108);
        margin-bottom: 5px;
        cursor: pointer;

        &:nth-child(2) {
            &:hover {
                color: white;
            }
        }

        &:nth-child(3) {
            color: rgb(209,42,35);

        }
    }
`

const Config = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
    padding: 40px 0px;
    background-color: rgb(17,17,17);
`

const Exit = styled.div``


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
    width: 300px;
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
            display: block;
            background-color: white;
            color: ${props => props.selected ? 'red' : 'black'};
            cursor: pointer;
        }
    }

    option {
        color: ${props => props.selected ? 'red' : 'rgb(206,206,206)'};
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