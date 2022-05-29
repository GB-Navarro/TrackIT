import Header from "./../Header";
import Footer from "./../Footer";
import styled from "styled-components";

import UserContext from "./../../contexts/UserContext"
import { useEffect, useState } from "react";
import { useContext } from "react";

import PercentageContext from "./../../contexts/PercentageContext";

import validateWeekday from "./functions/validateWeekday";
import formulateDate from "./functions/formulateDate";
import axios from "axios";

export default function Hoje() {

    let dayjs = require('dayjs');
    let weekday = require('dayjs/plugin/weekday');
    dayjs.extend(weekday);

    const { token } = useContext(UserContext);
    const { percentage, setPercentage } = useContext(PercentageContext);

    const [habits, setHabits] = useState([])
    const [check, setCheck] = useState([]);
    let [isInTheArray,setIsInTheArray] = useState(undefined);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        promisse.then((response) => {
            setHabits(response.data)
        })
        promisse.catch((error) => {
            console.log(error);
        })
    }, []);


    //checar o array e comparar com o id porque o isinthearray é um estado de resultado único, logo, ele generaliza as propriedades css
    return (
        <>
            <Header></Header>
            <Main>
                <TextsContainer>
                    <TextsBox>
                        <h1>{validateWeekday(dayjs().weekday())}, {formulateDate(dayjs().date(), dayjs().month(), dayjs().year())}</h1>
                        {percentage === 0 ? <h2>Nenhum hábito concluido ainda</h2> : <h2>{percentage}% dos hábitos concluídos</h2>}

                    </TextsBox>
                </TextsContainer>
                {habits.map((habit) => {
                    return (
                        <>
                            <HabitsSection>
                                <Habit>
                                    <HabitBox>
                                        <h1>{habit.name}</h1>
                                        <h3>Sequência atual: {habit.currentSequence}</h3>
                                        <h3>Seu recorde: {habit.highestSequence}</h3>
                                    </HabitBox>
                                    <IconBox check={check} id={habit.id}>
                                        <ion-icon name="checkbox" onClick={() => {
                                            setIsInTheArray(check.some((e) => e === habit.id))
                                            if (isInTheArray === false) {
                                                const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`;
                                                const checkPromisse = axios.post(URL, {}, config);
                                                setCheck(
                                                    [...check, habit.id]
                                                )
                                                checkPromisse.catch((error) => {
                                                    console.log(error);
                                                })
                                            } else {
                                                const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`;
                                                const uncheckPromisse = axios.post(URL, {}, config);
                                                setCheck(
                                                    check.filter((e) => e != habit.id)
                                                )
                                                uncheckPromisse.catch((error) => {
                                                    console.log(error)
                                                })
                                                
                                            }
                                        }}></ion-icon>
                                    </IconBox>
                                </Habit>
                            </HabitsSection>
                        </>
                    )
                })}

            </Main>
            <Footer></Footer>
        </>
    );
}

const Main = styled.main`
    height: 76vh;
    background-color: #E5E5E5;
    font-family: 'Lexend Deca', sans-serif;
`
const TextsContainer = styled.section`
    display:flex;
    justify-content: center;
    padding: 30px 0px 30px 0px;
    h1{
        font-size:23px;
        color:#126BA5;
    }
    h2{
        font-size: 18px;
        color: #bababa;
    }
`
const TextsBox = styled.div`
    width:90%;
    h1{
        margin-bottom:5px;
    }
`
const HabitsSection = styled.section`
    display:flex;
    justify-content: center;
`
const Habit = styled.div`
    width: 90%;
    height:15vh;
    background-color: #FFFFFF;
    color: #666666;
    border-radius: 5px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:10px;
    h1{
        font-size:20px;
        
    }
    h3{
        font-size:13px;
    }
`
const HabitBox = styled.div`
    margin-left:15px;
    h1{
        margin-bottom:13px;
    }
    h3{
        margin-bottom:5px;
    }
`
const IconBox = styled.div`
    font-size:75px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right:13px;
    color: ${props => (props.check.some((e) => e === props.id)) === true ? "#8FC549" : "#e7e7e7"}
`