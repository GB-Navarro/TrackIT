import axios from "axios";
import { useState } from "react";
import { Oval } from 'react-loader-spinner'

import setWeekdays from "../../functions/setWeekdays";
import modifyArray from "../../functions/modifyArray";

import {
    SectionContainer, Section, ColumnContainer, InputContainer,
    BoxContainer1, BoxContainer2, BoxContainer3, ButtonContainer,
    CreateHabitElement, LoadingButton
}
    from "./styles";

export default function CreateHabit(props) {

    const [loading, setLoading] = useState(false);
    const [enabled, setEnabled] = useState(true);

    return (
        <>
            <SectionContainer>
                <Section>
                    <ColumnContainer>
                        <InputContainer>
                            {
                                loading === false ?
                                    <input placeholder="nome do hábito" value={props.habit.name} onChange={(e) => {
                                        props.setHabit({
                                            ...props.habit,
                                            name: e.target.value
                                        })
                                    }}></input>
                                    :
                                    <input placeholder="nome do hábito" value={props.habit.name} onChange={(e) => {
                                        props.setHabit({
                                            ...props.habit,
                                            name: e.target.value
                                        })
                                    }} disabled></input>
                            }

                        </InputContainer>
                        <BoxContainer1>
                            <BoxContainer2>
                                <BoxContainer3>
                                    {props.weekdays.map((weekday) => {
                                        return (
                                            <>
                                                <CreateHabitElement auxArray={props.auxArray} weekday={weekday} 
                                                    onClick={() => {
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
                                                        {loading === true ? setEnabled(false) : setEnabled(true)}
                                                }}>{setWeekdays(weekday, enabled)}</CreateHabitElement>
                                            </>
                                        )
                                    })}
                                </BoxContainer3>
                            </BoxContainer2>
                        </BoxContainer1>
                    </ColumnContainer>
                    <ButtonContainer>
                        <button onClick={() => {
                            //props.setCreateHabit(false);
                            console.log(props.habit);
                        }}> Cancelar </button>
                        {
                            loading === false ? 
                                <button onClick={() => {
                                    setLoading(true);
                                    props.setHabit({
                                        ...props.habit,
                                        days: props.weekdaysArray
                                    })
                                    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", props.habit, props.config);
                                    promisse.then(() => {
                                        setLoading(false);
                                        props.setCreateHabit(false);
                                        props.setHabitsArray([...props.habitsArray, props.habit]);
                                        props.setWeekdaysArray([]);
                                    })
                                    promisse.catch(() => {
                                        alert("Ocorreu um erro, tente novamente");
                                        setLoading(false);
                                    })
                                    props.setAuxArray([]);
                                    props.setHabit({
                                        name: "",
                                        days: []
                                    })
                                    
                                }}> Salvar </button>
                            :
                                <LoadingButton disabled>
                                    <Oval color="#FFFFFF" height={50} width={35} />
                                </LoadingButton>
                        }
                    </ButtonContainer>
                </Section>
            </SectionContainer>
        </>
    )
}