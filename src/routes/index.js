import { Fragment } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Singin from "../pages/Singin/Index";
import Singup from "../pages/Singup";
import useAuth from "../hooks/useAuth";

const Private = ({ Item}) => {
    const {singned} = useAuth();
//se estiver logado ele vai passar o item=home
    return singned > 0 ? <Item /> : <Singin />;
//se não vai ser redirecionado para singin
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home}/>}/>
                <Route path="/" element={<Singin />} />
                <Route exact path="/singup" element={<Singin/>} />
                <Route path="*" element={<Singin />}/>
            </Routes>
        </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;