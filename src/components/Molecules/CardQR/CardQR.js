import Title from "components/Atoms/Title";
import { StyleWrapper } from "./style";

export const CardQR =({text, url})=> {

return (
    <StyleWrapper
    onClick = { ()=> {
        window.location = url;
    }}
    >
    <Title htmlTag="p" size={20}> Servicio en: {text}</Title>
    </StyleWrapper>
);

}

export default CardQR;