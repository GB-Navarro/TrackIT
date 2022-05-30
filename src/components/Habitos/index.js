import Header from "../Header";
import Footer from "../Footer";
import Habito from "./components/Habito";
import CreateHabit from "./components/CreateHabit";
import InitialMessage from "./components/InitialMessage";

import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";

import UserContext from "./../../contexts/UserContext";

import { Main, RowContainer } from "./styles"

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
            <Header/>
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
                        habitsArray={habitsArray} setHabitsArray={setHabitsArray} />
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
                                    config={config} habitDays={element.days} habitsArray={habitsArray} setHabitsArray={setHabitsArray} />
                            </>
                        )
                    })
                }
            </Main>
            <Footer/>
        </>
    )
}






