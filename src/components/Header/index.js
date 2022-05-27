import styled from "styled-components";
export default function Header(){
    return(
        <>
            <HEADER>
                <RowContainer>
                    <p>TrackIt</p>
                    <img src="https://www.hypeness.com.br/1/2018/03/rick-and-morty-4-1.png" alt="Imagem"/>
                </RowContainer>
            </HEADER>
        </>
    )
}
const HEADER = styled.header`
    background-color: #126BA5;
    height: 12vh;

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
const RowContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`
{/*Aling items não funciona (L-34)*/}