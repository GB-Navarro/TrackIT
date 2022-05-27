import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState ("");

    const navigate = useNavigate();

    function register(){
        const SINGUP = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promisse = axios.post(SINGUP, {
            email:email,
            name: name,
            image: photo,
            password:password
        })
        promisse.then(response => {
            console.log(response)
            navigate("/");
        })
        promisse.catch(() => {
            console.log("Deu xabu!");
        })
    }
    return (
        <>
            <Section>
                <ColumnContainer>
                    <img src="./../../assets/images/logo.jpeg" alt="Logo"/>
                    <h1>TrackIt</h1>
                    <input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder="senha" type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <input placeholder="nome" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <input placeholder="foto" type="text" value={photo} onChange={(e) => setPhoto(e.target.value)}></input>
                    <button onClick={register}> Cadastrar </button>
                    <Link to={"/"}>
                        <p>Já tem uma conta? Faça login!</p>
                    </Link>
                </ColumnContainer>
            </Section>
        </>
    )
}

const Section = styled.section`
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
const ColumnContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`