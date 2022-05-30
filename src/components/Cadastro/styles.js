import styled from "styled-components";

export const Section = styled.section`
    background-color: #FFFFFF;

    h1{
        font-family: 'Playball', cursive;
        font-size:70px;
        color:#126BA5;
        margin-bottom:33px;
    }
    input{
        width: 80vw;
        height: 45px;
        margin-bottom:6px;
        font-size:20px;
        color:#DBDBDB;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        padding-left:17px;
    }
    button{
        width: 80vw;
        height: 45px;
        background-color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size:21px;
        color:#FFFFFF;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
    }
    p{
        color:#52B6FF;
        margin-top:25px;
        font-family: 'Lexend Deca', sans-serif;
    }
`
export const ColumnContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`