import React from 'react';
import { Route } from "react-router-dom";
import MessageComponent from "../../pages/message";

const Message = ()=>(
    <div>
        <Route exact path="/wechat/message" component={MessageComponent}/>
    </div>
);

export default Message;