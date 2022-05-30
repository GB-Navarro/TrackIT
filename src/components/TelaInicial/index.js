import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Oval } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";

import UserContext from "./../../contexts/UserContext";
import ImageContext from "../../contexts/ImageContext";

import { Section, ColumnContainer, LoadingButton } from "./styles";

export default function TelaInicial() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { setToken } = useContext(UserContext);
    const { setImage } = useContext(ImageContext);

    const navigate = useNavigate();

    function submit() {
        setLoading(true);
        const LOGIN = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promisse = axios.post(LOGIN, {
            email: email,
            password: password
        })
        promisse.then((response) => {
            setLoading(false);
            setToken(response.data.token);
            setImage(response.data.image);
            navigate("/hoje");
        })
        promisse.catch((error) => {
            alert("Ocorreu um erro, tente novamente");
            setLoading(false);
        })
    }

    return (
        <>
            <Section>
                <ColumnContainer>

                    <img src="./assets/images/logo.png" alt="Logo" />
                    <h1>TrackIt</h1>

                    {
                        loading === true ?
                            <>
                                <input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} disabled></input>
                                <input placeholder="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled></input>
                                <LoadingButton disabled>
                                    <Oval color="#FFFFFF" height={50} width={35} />
                                </LoadingButton>
                            </>
                            :
                            <>
                                <input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <input placeholder="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                <button onClick={submit}> Entrar </button>
                            </>
                    }
                    <Link to={"/cadastro"}>
                        <p>Não tem uma conta ? Cadastre-se</p>
                    </Link>
                </ColumnContainer>
            </Section>
        </>
    )
}