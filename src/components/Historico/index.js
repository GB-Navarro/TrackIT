import Header from "./../Header";
import Footer from "./../Footer";

import { Section, TextsContainer, TextsBox, SpaceComponent } from "./styles";

export default function Historico() {
    return (
        <>
            <Header></Header>
            
            <Section>
            <SpaceComponent></SpaceComponent>
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
