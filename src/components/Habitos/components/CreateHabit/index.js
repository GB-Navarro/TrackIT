import axios from "axios";

import setWeekdays from "../../functions/setWeekdays";
import modifyArray from "../../functions/modifyArray";

import {
SectionContainer, Section, ColumnContainer, InputContainer,
BoxContainer1, BoxContainer2, BoxContainer3, ButtonContainer,
CreateHabitElement
}
    from "./styles";

export default function CreateHabit(props) {
    return (
        <>
            <SectionContainer>
                <Section>
                    <ColumnContainer>
                        <InputContainer>
                            <input placeholder="nome do hábito" value={props.habit.name} onChange={(e) => {
                                props.setHabit({
                                    ...props.habit,
                                    name: e.target.value
                                })
                            }}></input>
                        </InputContainer>
                        <BoxContainer1>
                            <BoxContainer2>
                                <BoxContainer3>
                                    {props.weekdays.map((weekday) => {
                                        return (
                                            <>
                                                <CreateHabitElement auxArray={props.auxArray} weekday={weekday} onClick={() => {
                                                    if (props.auxArray.some((e) => e === weekday) === false) {
                                                        props.setAuxArray([...props.auxArray, weekday]);
                                                    } else {
                                                        props.setAuxArray(props.auxArray.filter((e) => e !== weekday));
                                                    }
                                                    modifyArray(props.weekdaysArray, weekday, props.setWeekdaysArray);
                                                    props.setHabit({
                                                        ...props.habit,
                                                        days: props.weekdaysArray
                                                    })
                                                }}>{setWeekdays(weekday)}</CreateHabitElement>
                                            </>
                                        )
                                    })}
                                </BoxContainer3>
                            </BoxContainer2>
                        </BoxContainer1>
                    </ColumnContainer>
                    <ButtonContainer>
                        <button onClick={() => {
                            props.setCreateHabit(false);
                        }}> Cancelar </button>
                        <button onClick={() => {
                            props.setCreateHabit(false);
                            props.setHabit({
                                ...props.habit,
                                days: props.weekdaysArray
                            })
                            const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", props.habit, props.config);
                            promisse.then(() => {
                                props.setHabitsArray([...props.habitsArray, props.habit]);
                            })
                            promisse.catch((error) => {
                                console.log(error);
                            })
                            props.setAuxArray([]);
                            props.setHabit({
                                name: "",
                                days: []
                            })
                        }}> Salvar </button>
                    </ButtonContainer>
                </Section>
            </SectionContainer>
        </>
    )
}