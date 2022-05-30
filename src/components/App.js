import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hoje from "./../components/Hoje";
import Habitos from "./../components/Habitos";
import Cadastro from "./../components/Cadastro";
import Historico from "./../components/Historico"
import TelaInicial from "./../components/TelaInicial";

import UserContext from "./../contexts/UserContext";
import ImageContext from "./../contexts/ImageContext";
import PercentageContext from "./../contexts/PercentageContext";

export default function App() {

    const [token, setToken] = useState("");
    const [image, setImage] = useState("");
    const [percentage, setPercentage] = useState(0);

    return (
        <>
            <PercentageContext.Provider value={{ percentage, setPercentage }}>
                <UserContext.Provider value={{ token, setToken }}>
                    <ImageContext.Provider value={{ image, setImage }}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<TelaInicial />}></Route>
                                <Route path="/cadastro" element={<Cadastro />}></Route>
                                <Route path="/habitos" element={<Habitos />}></Route>
                                <Route path="/historico" element={<Historico />}></Route>
                                <Route path="/hoje" element={<Hoje />}></Route>
                            </Routes>
                        </BrowserRouter>
                    </ImageContext.Provider>
                </UserContext.Provider>
            </PercentageContext.Provider>
        </>
    )
}