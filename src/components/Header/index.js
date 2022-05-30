import { useContext } from "react";

import ImageContext from "../../contexts/ImageContext";

import { HeaderContainer, RowContainer } from "./styles";

export default function Header() {

    const { image } = useContext(ImageContext);

    return (
        <>
            <HeaderContainer>
                <RowContainer>
                    <p>TrackIt</p>
                    <img src={image} alt="Imagem" />
                </RowContainer>
            </HeaderContainer>
        </>
    )
}
