import React from 'react';
import GlobalStyle from './styles/global';
import RoutesApp from './routes';
import { AuthProvider } from './contents/auth';


//authprovcider da acesso a todos os valores que estamos passando
const App = () => {
    return (
        <AuthProvider>
            <RoutesApp />
            <GlobalStyle />
        </ AuthProvider>
    );
};

export default App;