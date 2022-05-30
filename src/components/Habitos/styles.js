import styled from "styled-components";

export const Main = styled.main`
    height: ${props => props.size.length === 0 ? '100vh' : (props.size.length >= 4 ? '100%' : '100vh')};
    background-color: #e5e5e5;
`
export const RowContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 40px;
    padding-top:22px;
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-size:23px;
        font-weight: 400;
        color:#126BA5;
        margin-left:17px;
        margin-top:5px;
    }
    button{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        font-size: 28px;
        color:#FFFFFF;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: 1px solid #52B6FF;
        margin-right: 18px;
    }
`
export const TopSpaceComponent = styled.div`
    background-color: #e5e5e5;
    padding-bottom:80px;
`

export const BottomSpaceComponent = styled.div`
    background-color: #e5e5e5;
    padding-bottom:120px;
`