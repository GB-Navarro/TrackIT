import Header from "./../Header";
import Footer from "./../Footer";
import styled from "styled-components";

export default function Historico(){
    return (
        <>
            <Header></Header>
            <Section>
                <TextsContainer>
                    <TextsBox>
                        <h1>Histórico</h1>
                        <p>Em breve você poderá ver o histórico dos seus hábitos aqui</p>
                    </TextsBox>
                </TextsContainer>
            </Section>
            <Footer></Footer>
        </>
    )
}
const Section = styled.section`
    height: 76vh;
    background-color:#E5E5E5;
    font-family: 'Lexend Deca', sans-serif;
    h1{
        font-size:23px;
        color:#126BA5;
        margin-bottom:17px;
    }
    p{
        font-size:18px;
        color:#666666;
    }
`
const TextsContainer = styled.div`
    display:flex;
    justify-content: center;
    padding-top:28px;
`
const TextsBox = styled.div`
    width:90%;
`