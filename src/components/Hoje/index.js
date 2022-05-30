import Header from "./../Header";
import Footer from "./../Footer";

import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";

import PercentageContext from "./../../contexts/PercentageContext";
import UserContext from "./../../contexts/UserContext"

import validateWeekday from "./functions/validateWeekday";
import formulateDate from "./functions/formulateDate";

import { Main, TextsContainer, TextsBox, HabitsSection, Habit, HabitBox, IconBox } from "./styles"

export default function Hoje() {

    let dayjs = require('dayjs');
    let weekday = require('dayjs/plugin/weekday');
    dayjs.extend(weekday);

    const { token } = useContext(UserContext);
    const { percentage, setPercentage } = useContext(PercentageContext);

    const [habits, setHabits] = useState([])
    const [check, setCheck] = useState([]);

    //let [isInTheArray, setIsInTheArray] = useState(undefined);

    let isInTheArray = undefined;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // habits.length = total de hábitos
    // percentage = check.length (total hábitos concluídos) / habits.length

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        promisse.then((response) => {
            setHabits(response.data)
        })
        promisse.catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <>
            <Header/>
            <Main>
                <TextsContainer>
                    <TextsBox>
                        <h1>
                            {validateWeekday(dayjs().weekday())},
                            <span> 
                                </span>  
                            {formulateDate(dayjs().date(), dayjs().month(), dayjs().year())}
                        </h1>
                        {
                            percentage === 0 ? 
                                <h2>Nenhum hábito concluido ainda</h2> 
                                : 
                                <h2>{percentage}% dos hábitos concluídos</h2>
                        }
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

                                            isInTheArray = (check.some((e) => e === habit.id));

                                            if (isInTheArray === false) {
                                                axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, config);
                                                setCheck(
                                                    [...check, habit.id]
                                                )
                                                /*{ 
                                                    ((habits.length > 0) && (check.length > 0)) ? 
                                                        setPercentage((habits.length / check.length) * 100) 
                                                        : 
                                                        <></> 
                                                }*/
                                            } else {
                                                axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, config);
                                                setCheck(
                                                    check.filter((e) => e !== habit.id)
                                                )
                                            }
                                        }}></ion-icon>
                                    </IconBox>
                                </Habit>
                            </HabitsSection>
                        </>
                    )
                })}
            </Main>
            <Footer/>
        </>
    );
}

