import React from 'react';
import {render} from 'react-dom';
import Router from './router';

const Index = ()=>{
    return (
        <div>
             <Router />
        </div>
    );
};

render(<Index/>, document.getElementById("root"));
