import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from '../container/App';
import LoginPage from '../container/LoginPage';
import ClienteContainer from '../container/ClienteContainer';
import ClienteCreateContainer from '../container/ClienteCreateContainer';

const Home = () => (<span>Bem vindo ao SetaIMC</span>); 
export default (onLogout) => (
    <Route path="/" name="app" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={LoginPage} />
        <Route path="cliente" component={ClienteContainer}/>
        <Route path="cliente/new" component={ClienteCreateContainer}/>
        <Route path="cliente/:id" component={ClienteCreateContainer}/>
        <Route path="logout" onEnter={onLogout}/>
    </Route>
);
