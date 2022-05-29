import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

import axios from "axios";
import { useEffect, useState } from "react";

import { useContext } from "react";
import UserContext from "./../../contexts/UserContext";


export default function Habitos() {

    const [createHabit, setCreateHabit] = useState(false);
    const [habit, setHabit] = useState({
        name: "",
        days: [] /*Falta adicionar esses days ao enviar o post para o server */
    })
    const [habitsArray, setHabitsArray] = useState([])

    const { token } = useContext(UserContext);

    //RETURN POINT --------------------------------

    const [days, setDays] = useState([
        {   
            name: 'Dom',
            selected: false
        },
        {
            name: 'Seg',
            selected: false
        },
        {
            name: 'Ter',
            selected: false
        },
        {
            name: 'Qua',
            selected: false
        },
        {
            name: 'Qui',
            selected: false
        },
        {
            name: 'Sex',
            selected: false
        },
        {
            name: 'Sab',
            selected: false
        }
    ])


    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];


    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    useEffect(() => {
        const promisse = axios.get(URL, config)

        promisse.then((response) => {
            setHabitsArray(response.data);
        })
        promisse.catch((error) => {
            console.log(error)
        })
    }, []);
    /*Entender melhor o useEffect, onde deve ser usado e pq quando eu uso ele no onclick da erro*/
    return (
        <>
            <Header></Header>
            <Main size={habitsArray}>
                <RowContainer>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => {
                        setCreateHabit(true);
                        console.log(habitsArray);
                    }}> + </button>
                </RowContainer>
                {createHabit === true ? <CreateHabit setCreateHabit={setCreateHabit} habit={habit} setHabit={setHabit} token={token} config={config} days={days} setDays={setDays} weekdays={weekdays}/> : <></>}
                {habitsArray.length === 0 ?
                    <InitialMessage />
                    :
                    habitsArray.map((element) => {
                        return (
                            <>
                                <Habito name={element.name} weekdays={weekdays}/>
                            </>
                        )
                    })
                }
            </Main>
            <Footer></Footer>
        </>
    )
}
function InitialMessage() {
    return (
        <>
            <Text>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Text>

        </>
    )
}
function CreateHabit(props) {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    return (
        <>
            <SectionContainer>
                <Section>
                    <ColumnContainer>
                        <InputContainer>
                            <input placeholder="nome do hábito" onChange={(e) => {
                                props.setHabit({
                                    ...props.habit,
                                    name: e.target.value
                                })
                            }}></input>
                        </InputContainer>
                        <BoxContainer1>
                            <BoxContainer2>
                                <BoxContainer3>
                                    {props.weekdays.map((weekday,index) => {
                                        return (
                                            <>
                                                {setWeekdays(weekday)}
                                            </>
                                        )
                                    })}
                                </BoxContainer3>
                            </BoxContainer2>
                        </BoxContainer1>
                    </ColumnContainer>
                    <ButtonContainer>
                        <button> Cancelar </button>
                        <button onClick={() => {
                            props.setCreateHabit(false);
                            const promisse = axios.post(URL, props.habit, props.config);
                            promisse.then((response) => {
                                console.log(response);
                            })
                            promisse.catch((error) => {
                                console.log(error);
                            })
                        }}> Salvar </button>
                    </ButtonContainer>
                </Section>
            </SectionContainer>
        </>
    )
}

function Habito(props) {

    return (
        <HabitsSectionContainer>
            <HabitsSection>
                <Habit>
                    <HabitContainer>
                        <TextContainer1>
                            <TextContainer2>
                                <TextContainer3>
                                    <h1>{props.name}</h1>
                                </TextContainer3>
                            </TextContainer2>
                        </TextContainer1>
                        <BoxContainer1>
                            <BoxContainer2>
                                <BoxContainer3>
                                    {props.weekdays.map((weekday) => {
                                        return (
                                            <>
                                                {setWeekdays(weekday)}
                                            </>
                                        )
                                    })}
                                </BoxContainer3>
                            </BoxContainer2>
                        </BoxContainer1>
                    </HabitContainer>
                    <aside>
                        <ion-icon name="trash-outline"></ion-icon>
                    </aside>
                </Habit>
            </HabitsSection>
        </HabitsSectionContainer>
    )
}

function setWeekdays(weekday){
    if(weekday === 'Dom'){
        return <Box>D</Box>
    }else if(weekday === 'Seg' || weekday == 'Sex' || weekday == 'Sab'){
        return <Box>S</Box>
    }else if(weekday === 'Ter'){
        return <Box>T</Box>
    }else if(weekday === 'Qua' || weekday === 'Qui'){
        return <Box>Q</Box>
    }
}

const Main = styled.main`
    height: ${props => props.size.length === 0 ? '100vh' : '100%'};
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
const Text = styled.div`
    display:flex;
    justify-content: center;
    margin-top:30px;
    p{  
        width: 90%;
        font-family: 'Lexend Deca', sans-serif;
        font-size:18px;
        font-weight: 400;
        color:#666666;
        margin-top:30px;
    }
`
const Section = styled.section`
    width: 90%;
    height: 30vh;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top:20px;
    input{
        width: 80vw;
        height: 45px;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size:20px;
        color:#DBDBDB;
        border: 1px solid #D4D4D4;
        margin-bottom:10px;
        padding-left:11px;
    }
`
const Box = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius:5px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    font-family: 'Lexend Deca', sans-serif;
    font-size:20px;
    color:#DBDBDB;
`
const ColumnContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:18px;
`
const SectionContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    margin-top:20px;
`
const ButtonContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    button{
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size:16px;
        color: #FFFFFF;
        border: 1px solid #52B6FF;
        border-radius: 5px;
        margin: 0px 20px 15px 0px;
    }
`
const InputContainer = styled.div`
    display:flex;
    justify-content: center;
`
const BoxContainer1 = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    margin-bottom:30px;
`
const BoxContainer2 = styled.div`
    width:90%;
    height: 30px;
`
const BoxContainer3 = styled.div`
    display:flex;
`
const HabitsSectionContainer = styled.div`
    display:flex;
    justify-content: center;
`
const HabitsSection = styled.section`
    width:90%;
    height:15vh;
    background-color:#FFFFFF;
    border-radius:5px;
    display:flex;
    align-items: center;
    margin-top:50px;
`
const Habit = styled.div`

    height: 91px;
    margin-top:18px;
    display:flex;
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-size:20px;
        color:#666666;
    }
    aside{
        margin-left:74px;
        font-size:18px
    }

`
const TextContainer1 = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
`
const TextContainer2 = styled.div`
    width:90%;
    height: 30px;
`
const TextContainer3 = styled.div`
    display:flex;
`
const HabitContainer = styled.div`
`