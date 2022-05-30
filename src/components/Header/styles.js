import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #126BA5;
    height: 12vh;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:2;

    p{
        color:#FFFFFF;
        font-size:40px;
        font-family: 'Playball', cursive;
        margin-left:18px;
        margin-top:20px;
    }
    img{
        width:51px;
        height:51px;
        max-width: 100%;
        max-height: 100%;
        border-radius: 99px;
        margin-right: 18px;
        margin-top:15px;
    }
`
export const RowContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`