import React from "react";
import * as C from "./styles";

const button = ({Text, onClick, type = "button"}) => {
    return (
        <C.Button onClick={onClick} type={type}>
        {Text}
        </C.Button>
    );
};

export default button;