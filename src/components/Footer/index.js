import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";


export default function Footer(){
    const percentage = 41;
    return(
        <>
            <FooterContainer>
                <RowContainer>
                    <Link to="/habitos">
                        <p>Hábitos</p>
                    </Link>
                    <CircularProgressBarBox>
                        <Link to="/hoje">
                            <CircularProgressbar value={percentage} text={"Hoje"} background={true} backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor:"#52B6FF",
                                pathColor: "#FFFFFF",
                                textColor: "#FFFFFF",
                                trailColor: "#52B6FF",
                                textSize: "16px"
                            })}
                            />;
                        </Link>
                    </CircularProgressBarBox>
                    <Link to="/historico">
                        <p>Histórico</p>
                    </Link>
                </RowContainer>
            </FooterContainer>
        </>
    )
}

const FooterContainer = styled.footer`
    height: 12vh;
    background-color: #FFFFFF;
    position:fixed;
    bottom:0;
    left:0;
    right:0;

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size:18px;
        font-weight: 400;
        color:#52B6FF;
        margin-top:30px;
    }
`
const RowContainer = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    position:relative;
`
const CircularProgressBarBox = styled.div`
    width:91px;
    height: 91px;
    position:absolute;
`

{/*Porque o aling items não funciona aqui ? */}