import React, { useState } from "react";
import * as C from "./styles";
import Input from "../../componest/input";
import Button from "../../componest/button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Singin = () => {

    const  {Singin} = useAuth();
    const navigate = useNavigate();

    const {email, setEmail} = useState("");
    const {senha, setSenha} = useState("");
    const {error, setError} = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos!");
            return;
        }

        const res = Singin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };

    return (
        <C.Conteiner>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                type="email"
                placeholder="Digite seu E-amil"
                value={email}
                onChange= {(e) => [setEmail(e.target.value), setError("")]}
                />

                <Input 
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Entrar" onClick={handleLogin} />

                <C.LabelSingup>
                    Não tem uma conta?
                    <C.Strong>
                        <Link to="/singup">&nbsp;Registre-se</Link>
                    </C.Strong>
                </C.LabelSingup>
            </C.Content>
        </C.Conteiner>
        
        
    );
};

export default Singin;