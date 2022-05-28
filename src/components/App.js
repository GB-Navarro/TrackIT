import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./../components/TelaInicial";
import Cadastro from "./../components/Cadastro";
import Habitos from "./../components/Habitos";
import Historico from "./../components/Historico"
import Hoje from "./../components/Hoje";

import { useState } from "react";
import UserContext from "./../contexts/UserContext";
import ImageContext from "./../contexts/ImageContext";

export default function App(){

    const [token, setToken] = useState("");
    const [image, setImage] = useState("");

    return (
        <>
            <UserContext.Provider value={{token, setToken}}>
                <ImageContext.Provider value={{image, setImage}}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<TelaInicial/>}></Route>
                            <Route path="/cadastro" element={<Cadastro/>}></Route>
                            <Route path="/habitos" element={<Habitos />}></Route>
                            <Route path="/historico" element={<Historico />}></Route>
                            <Route path="/hoje" element={<Hoje />}></Route>
                        </Routes>
                    </BrowserRouter> 
                </ImageContext.Provider>
            </UserContext.Provider>     
        </>
    )
}