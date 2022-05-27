import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

import axios from "axios";
import { useEffect, useState } from "react";

import { useContext } from "react";
import UserContext from "./../../contexts/UserContext";
import ImageContext from "../../contexts/ImageContext";

export default function Habitos() {

    const [screenStage, setScreenStage] = useState(1);
    const [createHabit, setCreateHabit] = useState(false);
    const [habitsArray, setHabitsArray] = useState([])

    const { token } = useContext(UserContext);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    
    const getHabitsPromisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

    useEffect(() => {
        getHabitsPromisse.then((response) => {
            setHabitsArray(response.data);
        })
        getHabitsPromisse.catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <Header></Header>
            <Main>
                <RowContainer>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => {
                        setCreateHabit(true);
                        console.log(habitsArray);
                    }}> + </button>
                </RowContainer>
                {createHabit === true ? <CreateHabit setCreateHabit={setCreateHabit}/> : <></>}
                {habitsArray.length === 0 ? <InitialMessage/> : <></> /*Fazer um map com o array e habits aqui */}
                
                {/*<Habito />*/}
            </Main>
            <Footer></Footer>
        </>
    )
}
function InitialMessage() {
    return (
        <>
            <Main>
                <Text>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Text>
            </Main>
        </>
    )
}
function CreateHabit(props) {
    return (
        <>
            <Main>
                <SectionContainer>
                    <Section>
                        <ColumnContainer>
                            <InputContainer>
                                <input placeholder="nome do hábito"></input>
                            </InputContainer>
                            <BoxContainer1>
                                <BoxContainer2>
                                    <BoxContainer3>
                                        <Box> D </Box>
                                        <Box> S </Box>
                                        <Box> T </Box>
                                        <Box> Q </Box>
                                        <Box> Q </Box>
                                        <Box> S </Box>
                                        <Box> S </Box>
                                    </BoxContainer3>
                                </BoxContainer2>
                            </BoxContainer1>
                        </ColumnContainer>
                        <ButtonContainer>
                            <button> Cancelar </button>
                            <button onClick={() => {
                                props.setCreateHabit(false);
                            }}> Salvar </button>
                        </ButtonContainer>
                    </Section>
                </SectionContainer>
            </Main>
        </>
    )
}

function Habito(props) {
    return (
        <Main>
            <HabitsSectionContainer>
                <HabitsSection>
                    <Habit>
                        <HabitContainer>
                            <TextContainer1>
                                <TextContainer2>
                                    <TextContainer3>
                                        <h1>Ler 1 capítulo de livro</h1>
                                    </TextContainer3>
                                </TextContainer2>
                            </TextContainer1>
                            <BoxContainer1>
                                <BoxContainer2>
                                    <BoxContainer3>
                                        <Box> D </Box>
                                        <Box> S </Box>
                                        <Box> T </Box>
                                        <Box> Q </Box>
                                        <Box> Q </Box>
                                        <Box> S </Box>
                                        <Box> S </Box>
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
        </Main>
    )
}

const Main = styled.main`
    background-color: #E5E5E5;
    height: 76vh;

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