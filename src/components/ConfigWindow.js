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
    padding: 40px;
`

const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h2 {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 900;
    }
`

const Config = styled.div``

const Exit = styled.div``


const RiotIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(209,54,57);
    border-radius: 50%;

    img {
        width: 25px;
        height: 25px;
    }
`