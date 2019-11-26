import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import './Buttons.css'
const Buttons=function(props){
    return (
    <>
        <button className={props.class} onClick={props.onclick}>{props.value}</button>
         
        </>
    );
}
export default Buttons;