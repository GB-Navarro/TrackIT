import styled from "styled-components";

export default function setWeekdays(weekday, enabled) {
    if(enabled == true){
        if (weekday === 'Dom') {
            return <Box>D</Box>
        } else if (weekday === 'Seg') {
            return <Box>S</Box>
        } else if (weekday === 'Ter') {
            return <Box>T</Box>
        } else if (weekday === 'Qua') {
            return <Box>Q</Box>
        } else if (weekday === 'Qui') {
            return <Box>Q</Box>
        } else if (weekday === 'Sex') {
            return <Box>S</Box>
        } else if (weekday === 'Sab') {
            return <Box>S</Box>
        }
    }else{
        if (weekday === 'Dom') {
            return <Box disabled>D</Box>
        } else if (weekday === 'Seg') {
            return <Box disabled>S</Box>
        } else if (weekday === 'Ter') {
            return <Box disabled>T</Box>
        } else if (weekday === 'Qua') {
            return <Box disabled>Q</Box>
        } else if (weekday === 'Qui') {
            return <Box disabled>Q</Box>
        } else if (weekday === 'Sex') {
            return <Box disabled>S</Box>
        } else if (weekday === 'Sab') {
            return <Box disabled>S</Box>
        }
    }
    
}

const Box = styled.button`
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

`