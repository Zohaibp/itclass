import React from 'react';
import ReactDom from 'react-dom';

function Greeting (){
    return <h1 id="root"> this is my first react.</h1>;
}



ReactDom.render(<Greeting/>,document.getElementById("root"));