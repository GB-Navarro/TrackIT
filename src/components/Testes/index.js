import dayjs from "dayjs";

export default function Testes(){
    let dayjs = require('dayjs');
    let weekday = require('dayjs/plugin/weekday');
    dayjs.extend(weekday);
    console.log(dayjs().date());
    console.log(dayjs().month());
    console.log(dayjs().year());
    return(
        <>
        </>
    )
}

{/*import styled from "styled-components";
import { useState } from "react";

//fazer uma poc sobre estados + spread operator (para estados com array e objetos) 

export default function Testes(){

    const [tarefas,setTarefas] = useState(
        [
            "Ir no mercado",
            "Arrumar a casa",
            "Fazer a atividade",
            "Entregar relatório"
        ]
    )

    return (
        <Section>
            {
                tarefas.map((tarefa) => {
                    return(
                        <>
                            <div>
                                {tarefa}
                            </div>
                        </>
                    )
                })
            }
            <Button onClick={() => {
                let novaTarefa = prompt("Fala a boa ai camarada");
                setTarefas([...tarefas, novaTarefa]);
                    //Tive que usar o spread operador aqui pois, caso contrário,
                    //o React não renderizaria o componente novamente, já que, para o useState
                    //o array seria o mesmo, já que a sua referência não foi mudada. Por isso é importante
                    //o uso do spread operator, para criar um novo array com uma nova referência, e, a parti dai,
                    //eu consigo adicionar um novo item ao array.
            }}>Adicionar tarefa</Button>
        </Section>
    )
}

const Section = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const Button = styled.button`
    background-color: #52B6FF;
    border-radius: 5px;
    width: 50vw;
    height: 10vh;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 15px;
    margin-top:20px
`
*/}





{/*import styled from "styled-components";
import { useState } from "react";

export default function Testes(){

    const [contagem, setContagem] = useState(0);

    return (
        <>
            <Section>
                <h1> {contagem} </h1>
                <Button onClick={() => {
                    setContagem(contagem + 1);
                }}> Like </Button>
            </Section>
        </>
    )
}

const Section = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const Button = styled.button`
    background-color: #52B6FF;
    border-radius: 5px;
    width: 20vw;
    height: 5vh;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 15px;
    margin-top:20px
`
*/}