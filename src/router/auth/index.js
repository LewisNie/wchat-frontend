import React from 'react';
import Login from "../../pages/welcome/login";
import Register from "../../pages/welcome/register";
import { Route } from "react-router-dom";

const Auth = ()=>(
    <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
    </div>
);

export default Auth;