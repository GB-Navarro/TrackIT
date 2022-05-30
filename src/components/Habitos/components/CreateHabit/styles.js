import styled from "styled-components";

export const Section = styled.section`
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

export const ColumnContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:18px;
`
export const SectionContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    margin-top:20px;
`
export const ButtonContainer = styled.div`
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
export const InputContainer = styled.div`
    display:flex;
    justify-content: center;
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
export const CreateHabitElement = styled.span`
div{
    color:${props => (props.auxArray.some((e) => e === props.weekday) === false) ? "#DBDBDB" : "#FFFFFF"};
    background-color: ${props => (props.auxArray.some((e) => e === props.weekday) === false) ? "#FFFFFF" : "#CFCFCF"};
}
`
export const LoadingButton = styled.button`
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size:16px;
        color: #FFFFFF;
        border: 1px solid #52B6FF;
        border-radius: 5px;
        margin: 0px 20px 15px 0px;
        display:flex;
        justify-content: center;
        align-items: center;
`