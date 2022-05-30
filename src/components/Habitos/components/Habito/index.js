import setWeekdays from "../../functions/setWeekdays";
import deleteHabit from "../../functions/deleteHabit";

import {
    HabitsSectionContainer, HabitsSection, HabitBox, TextContainer1,
    TextContainer2, TextContainer3, HabitContainer, BoxContainer1,
    BoxContainer2, BoxContainer3, HabitElement
}
    from "./styles"

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