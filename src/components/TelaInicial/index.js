import styled from "styled-components"
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

import UserContext from "./../../contexts/UserContext";
import ImageContext from "../../contexts/ImageContext";

export default function TelaInicial(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");

    const {setToken} = useContext(UserContext);
    const {setImage} = useContext(ImageContext);
    
    const navigate = useNavigate();

        function submit(){
        const LOGIN = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promisse = axios.post(LOGIN,{
            email: email,
            password: password    
        })
        promisse.then(response => {
            setToken(response.data.token);
            setImage(response.data.image);
            navigate("/hoje");
        })
        promisse.catch((error) => {
            console.log(error);
        })
    }

    return(
        <>
            <Section>
                <ColumnContainer>
                    <img src="./../../assets/images/logo.jpeg" alt="Logo"/>
                    <h1>TrackIt</h1>
                    <input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={submit}> Entrar </button>
                    <Link to={"/cadastro"}>
                        <p>Não tem uma conta ? Cadastre-se</p>
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
        font-weight: 400;
        font-family: 'Lexend Deca', sans-serif;
        font-size:21px;
        color:#FFFFFF;
        border-radius: 5px;
        border: 1px solid #D4D4D4;

    }
    p{
        color:#52B6FF;
        font-weight: 400;
        margin-top:25px;
        font-family: 'Lexend Deca', sans-serif;
    }
`
const ColumnContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`