import axios from "axios";
import { useState } from "react";
import { Oval } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";

import { Section, ColumnContainer, LoadingButton } from "./styles";

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function register() {
        setLoading(true);
        const SINGUP = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promisse = axios.post(SINGUP, {
            email: email,
            name: name,
            image: photo,
            password: password
        })
        promisse.then(() => {
            setLoading(false);
            navigate("/");
        })
        promisse.catch(() => {
            alert("Algo deu errado, tente novamente");
            setLoading(false);
        })
    }
    return (
        <>
            <Section>
                <ColumnContainer>
                    <img src="./../../assets/images/logo.jpeg" alt="Logo" />
                    <h1>TrackIt</h1>
                    {
                        loading === false ?
                            <>
                                <input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <input placeholder="senha" type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                <input placeholder="nome" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                                <input placeholder="foto" type="text" value={photo} onChange={(e) => setPhoto(e.target.value)}></input>
                                <button onClick={register}> Cadastrar </button>
                            </>
                            :
                            <>
                                <input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} disabled></input>
                                <input placeholder="senha" type="text" value={password} onChange={(e) => setPassword(e.target.value)} disabled></input>
                                <input placeholder="nome" type="text" value={name} onChange={(e) => setName(e.target.value)} disabled></input>
                                <input placeholder="foto" type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} disabled></input>
                                <LoadingButton disabled>
                                    <Oval color="#FFFFFF" height={50} width={35} />
                                </LoadingButton>
                            </>
                    }

                    <Link to={"/"}>
                        <p>Já tem uma conta? Faça login!</p>
                    </Link>
                </ColumnContainer>
            </Section>
        </>
    )
}

