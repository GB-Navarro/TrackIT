import { useContext } from "react";
import styled from "styled-components";

import ImageContext from "../../contexts/ImageContext";

export default function Header(){

    const { image } = useContext(ImageContext);

    return(
        <>
            <HEADER>
                <RowContainer>
                    <p>TrackIt</p>
                    <img src={image} alt="Imagem"/>
                </RowContainer>
            </HEADER>
        </>
    )
}
const HEADER = styled.header`
    background-color: #126BA5;
    height: 12vh;

    p{
        color:#FFFFFF;
        font-size:40px;
        font-family: 'Playball', cursive;
        margin-left:18px;
        margin-top:20px;
    }
    img{
        width:51px;
        height:51px;
        max-width: 100%;
        max-height: 100%;
        border-radius: 99px;
        margin-right: 18px;
        margin-top:15px;
    }
`
const RowContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`