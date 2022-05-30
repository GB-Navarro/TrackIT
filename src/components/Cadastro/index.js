import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Section, ColumnContainer } from "./styles";

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");

    const navigate = useNavigate();

    function register() {
        const SINGUP = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promisse = axios.post(SINGUP, {
            email: email,
            name: name,
            image: photo,
            password: password
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
                    <img src="./../../assets/images/logo.jpeg" alt="Logo" />
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

