import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: 12vh;
    background-color: #FFFFFF;
    position:fixed;
    bottom:0;
    left:0;
    right:0;

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size:18px;
        font-weight: 400;
        color:#52B6FF;
        margin-top:30px;
    }
`
export const RowContainer = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    position:relative;
`
export const CircularProgressBarBox = styled.div`
    width:91px;
    height: 91px;
    position:absolute;
`