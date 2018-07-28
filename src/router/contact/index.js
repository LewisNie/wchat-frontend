import React from 'react';
import { Route } from "react-router-dom";
import ContactComponent from "../../pages/contact/contact";

const Contact = ()=>(
    <div>
        <Route exact path="/wechat/contact" component={ContactComponent}/>
    </div>
);

export default Contact;