import styled from "styled-components";

import setWeekdays from "../../functions/setWeekdays";
import deleteHabit from "../../functions/deleteHabit";
import codifyArray from "../../functions/codifyArray";

import { HabitsSectionContainer, HabitsSection, HabitBox, TextContainer1, TextContainer2, TextContainer3, HabitContainer, BoxContainer1, BoxContainer2, BoxContainer3 } from "./styles"

export default function Habito(props) {

    return (
        <HabitsSectionContainer>
            <HabitsSection>
                <HabitBox>
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
                                                <HabitElement habitDays={props.habitDays} weekday={weekday}>{setWeekdays(weekday)}</HabitElement>
                                            </>
                                        )
                                    })}
                                </BoxContainer3>
                            </BoxContainer2>
                        </BoxContainer1>
                    </HabitContainer>
                    <aside>
                        <ion-icon name="trash-outline" onClick={() => {
                            if (window.confirm("Voce realmente quer deletar esse hábito ?")) {
                                deleteHabit(props.id, props.config);
                                props.setHabitsArray(props.habitsArray.filter((e) => e.id !== props.id))
                            }
                        }}></ion-icon>
                    </aside>
                </HabitBox>
            </HabitsSection>
        </HabitsSectionContainer>
    )
}

//Ver como eu posso mover esse componente pro arquivo styles
const HabitElement = styled.span`
    width:30px;
    height: 30px;
    border-radius: 5px;
    margin-right: 4px;
    color: ${props => (props.habitDays.some((e) => e === codifyArray(props.weekday))) === false ? "#DBDBDB" : "#FFFFFF"};
    background-color: ${props => (props.habitDays.some((e) => e === codifyArray(props.weekday))) === false ? "#FFFFFF" : "#CFCFCF"};
`