import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

import axios from "axios";
import { useEffect, useState } from "react";

import { useContext } from "react";
import UserContext from "./../../contexts/UserContext";

import Habito from "./components/Habito";
import CreateHabit from "./components/CreateHabit";
import InitialMessage from "./components/InitialMessage";


export default function Habitos() {

    const [createHabit, setCreateHabit] = useState(false);
    const [weekdaysArray, setWeekdaysArray] = useState([])
    const [createHabitAuxArray, setCreateHabitAuxArray] = useState([]);
    const [habit, setHabit] = useState({
        name: "",
        days: []
    })
    const [habitsArray, setHabitsArray] = useState([])

    const { token } = useContext(UserContext);


    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

        promisse.then((response) => {
            setHabitsArray(response.data);
        })
        promisse.catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <Header></Header>
            <Main size={habitsArray}>
                <RowContainer>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => {
                        setCreateHabit(true);
                    }}> + </button>
                </RowContainer>
                {createHabit === true ?
                    <CreateHabit setCreateHabit={setCreateHabit} habit={habit} setHabit={setHabit}
                        token={token} config={config} weekdaysArray={weekdaysArray}
                        setWeekdaysArray={setWeekdaysArray} weekdays={weekdays}
                        auxArray={createHabitAuxArray} setAuxArray={setCreateHabitAuxArray} 
                        habitsArray={habitsArray} setHabitsArray={setHabitsArray}/>
                    :
                    <></>
                }
                {habitsArray.length === 0 ?
                    <InitialMessage />
                    :
                    habitsArray.map((element) => {
                        return (
                            <>
                                <Habito name={element.name} weekdays={weekdays} id={element.id}
                                    config={config} habitDays={element.days} habitsArray={habitsArray} setHabitsArray={setHabitsArray}/>
                            </>
                        )
                    })
                }
            </Main>
            <Footer></Footer>
        </>
    )
}

const Main = styled.main`
    height: ${props => props.size.length === 0 ? '100vh' : (props.size.length >= 4 ? '100%' : '100vh')};
    background-color: #e5e5e5;
`
const RowContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 40px;
    padding-top:22px;
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-size:23px;
        font-weight: 400;
        color:#126BA5;
        margin-left:17px;
        margin-top:5px;
    }
    button{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        font-size: 28px;
        color:#FFFFFF;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: 1px solid #52B6FF;
        margin-right: 18px;
    }
`




