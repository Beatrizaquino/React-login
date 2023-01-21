import { createContext, useEffect, useState } from "react";


//verificar se as imortanções conferem

//esse coitado recebe um objeto vazio
export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
//toda vez que a aplicação for carregada, vai verificar o token e o db
    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorege = localStorage.getItem("users_db");

        if (userToken && usersStorege) {
            const hasUser =JSON.parse(usersStorege)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const Singin = (email, password) => {
        //receber usuario
        const usersStorege = JSON.parse(localStorage.getItem("users_db"));

        //filtrar email
        const hasUser = usersStorege?.filter((user) =>user.email === email);

        //se o usuario verificar, vamor ver se é o mesmo email e password
        if (hasUser?.length) {
            if (hasUser[0].email == email && hasUser[0].password == password) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem(("User_token", JSON.stringify({email, token})));
            setUser({email, password});
            return;
            } else {
                return "E-mail ou senha incorreta";
            } 
        } else {
            return "Usuario não cadastrado";
        }
    };

    const Singup = (email, password)  => {
        const usersStorege = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorege?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return "Já tem uma conta com esse E-mail";
        }

        //se não tiver vai vim aqui
        let newUser;

        if (usersStorege) {
            //vai concatenar com um novo item
            newUser = [...usersStorege, { email, password}];
        } else {
            newUser = [{ email, password}];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));
        
        return;
    };

    const Singout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    //retornar valores para poder usar em qualquer lugar da aplicação

    return <AuthContext.Provider value={{user, singned: !!user,Singin, Singup, Singout}}>{children}</AuthContext.Provider>
};