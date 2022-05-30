import styled from "styled-components";
import codifyArray from "../../functions/codifyArray";

export const HabitsSectionContainer = styled.div`
    display:flex;
    justify-content: center;
`
export const HabitsSection = styled.section`
    width:90%;
    height:15vh;
    background-color:#FFFFFF;
    border-radius:5px;
    display:flex;
    align-items: center;
    margin-top:50px;
`
export const HabitBox = styled.div`
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
export const TextContainer1 = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
`
export const TextContainer2 = styled.div`
    width:90%;
    height: 30px;
`
export const TextContainer3 = styled.div`
    display:flex;
`
export const HabitContainer = styled.div`
`

export const BoxContainer1 = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    margin-bottom:30px;
`
export const BoxContainer2 = styled.div`
    width:90%;
    height: 30px;
`
export const BoxContainer3 = styled.div`
    display:flex;
`
export const HabitElement = styled.span`
width:30px;
height: 30px;
border-radius: 5px;
margin-right: 4px;
color: ${props => (props.habitDays.some((e) => e === codifyArray(props.weekday))) === false ? "#DBDBDB" : "#FFFFFF"};
background-color: ${props => (props.habitDays.some((e) => e === codifyArray(props.weekday))) === false ? "#FFFFFF" : "#CFCFCF"};
`