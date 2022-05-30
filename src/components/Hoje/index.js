import Header from "./../Header";
import Footer from "./../Footer";

import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";

import PercentageContext from "./../../contexts/PercentageContext";
import UserContext from "./../../contexts/UserContext"

import validateWeekday from "./functions/validateWeekday";
import formulateDate from "./functions/formulateDate";

import { Main, TextsContainer, TextsBox, HabitsSection, Habit, HabitBox, IconBox, BottomSpaceComponent, TopSpaceComponent } from "./styles"

export default function Hoje() {

    let dayjs = require('dayjs');
    let weekday = require('dayjs/plugin/weekday');
    dayjs.extend(weekday);

    const { token } = useContext(UserContext);
    const { percentage, setPercentage } = useContext(PercentageContext);

    const [habits, setHabits] = useState([]);
    const [check, setCheck] = useState([]);
    const [checkedHabits, setCheckedHabits] = useState(0);
    const [totalHabits, setTotalHabits] = useState(0);

    let isInTheArray = undefined;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function getId(array){
        let idArray = []
        for(let i = 0; i < array.length; i++){
            idArray.push(array[i].id)
        }
        return idArray
    }

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        promisse.then((response) => {
            setHabits(response.data);
            setCheck(getId(response.data.filter((e) => e.done === true)))
            setCheckedHabits((response.data.filter((e) => e.done === true)).length);
            setTotalHabits(response.data.length);
            setPercentage(Math.floor((checkedHabits/totalHabits)*100));
        })
        promisse.catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <>
            <Header/>
            <TopSpaceComponent></TopSpaceComponent>
            <Main size={habits}>
                <TextsContainer>
                    <TextsBox>
                        <h1>
                            {validateWeekday(dayjs().weekday())},
                            <span> </span>  
                            {formulateDate(dayjs().date(), dayjs().month(), dayjs().year())}
                        </h1>
                        {
                            setPercentage(Math.floor((checkedHabits/totalHabits)*100))
                        }
                        {
                            (percentage === 0 || percentage === NaN) ? 
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
                                    <IconBox check={check} id={habit.id} done={habit.done}>
                                        <ion-icon name="checkbox" onClick={() => {

                                            isInTheArray = (check.some((e) => e === habit.id));
                    
                                            if (isInTheArray === false) {
                                                habit.done = true;
                                                setCheck(
                                                    [...check, habit.id]
                                                )
                                                setCheckedHabits(checkedHabits + 1);
                                                setPercentage(Math.floor((checkedHabits/totalHabits)*100));
                                                axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, config);
                                            } else {
                                                habit.done = false;
                                                setCheck(
                                                    check.filter((e) => e !== habit.id)
                                                )
                                                setCheckedHabits(checkedHabits - 1);
                                                setPercentage(Math.floor((checkedHabits/totalHabits)*100));
                                                axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, config);
                                            }
                                        }}></ion-icon>
                                    </IconBox>
                                </Habit>
                            </HabitsSection>
                        </>
                    )
                })}
                <BottomSpaceComponent></BottomSpaceComponent>
            </Main>
            <Footer/>
        </>
    );
}

