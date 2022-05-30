import styled from "styled-components";

export const Main = styled.main`
    height: ${props => props.size.length === 0 ? '100vh' : (props.size.length >= 4 ? '100%' : '100vh')};
    background-color: #E5E5E5;
    font-family: 'Lexend Deca', sans-serif;
`
export const TextsContainer = styled.section`
    display:flex;
    justify-content: center;
    padding: 30px 0px 30px 0px;
    h1{
        font-size:23px;
        color:#126BA5;
    }
    h2{
        font-size: 18px;
        color: #bababa;
    }
`
export const TextsBox = styled.div`
    width:90%;
    h1{
        margin-bottom:5px;
    }
`
export const HabitsSection = styled.section`
    display:flex;
    justify-content: center;
`
export const Habit = styled.div`
    width: 90%;
    height:15vh;
    background-color: #FFFFFF;
    color: #666666;
    border-radius: 5px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:10px;
    h1{
        font-size:20px;
        
    }
    h3{
        font-size:13px;
    }
`
export const HabitBox = styled.div`
    margin-left:15px;
    h1{
        margin-bottom:13px;
    }
    h3{
        margin-bottom:5px;
    }
`

export const SpaceComponent = styled.div`
    background-color: #e5e5e5;
    padding-bottom:100px;
`

export const IconBox = styled.div`
    font-size:75px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right:13px;
    color: ${props => props.done === true ? "#8FC549" : (props.check.length > 0 ? ((props.check.some((e) => e === props.id)) === true ? "#8FC549" : "#e7e7e7") : "#e7e7e7")}
    `
    


