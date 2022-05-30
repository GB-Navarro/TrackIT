import { useContext } from "react";
import { Link } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import PercentageContext from "./../../contexts/PercentageContext";

import { FooterContainer, RowContainer, CircularProgressBarBox } from "./styles";

export default function Footer() {
    const { percentage } = useContext(PercentageContext);
    return (
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
                                    backgroundColor: "#52B6FF",
                                    pathColor: "#FFFFFF",
                                    textColor: "#FFFFFF",
                                    trailColor: "#52B6FF",
                                    textSize: "18px"
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


