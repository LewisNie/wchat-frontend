import React, {Component} from 'react';
import {HashRouter,Route} from 'react-router-dom';
import Login from "../welcome/login";
import Contact from "../contact/contact";

class Wechat extends Component{
    render(){
        return (
            <div>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Contact} />
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Wechat;