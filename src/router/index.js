import React from "react";
import { HashRouter } from "react-router-dom";
import Auth from './auth/index';
import Wechat from './wechat';

const Index = ()=> {
    return (
        <HashRouter>
            <div>
                <Auth/>
                <Wechat/>

            </div>
        </HashRouter>
    );
};

export default Index;
