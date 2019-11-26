import React from 'react';
import Button from '../Components/Buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
const Scientific=function(props){
    return(
        <div class="container">
            <br/>
        <Button value="cos" onclick={props.onclick} class="btn btn-outline-dark"/>
        {' '}
        <Button value="sin" onclick={props.onclick}class="btn btn-outline-dark"/>
        {' '}
        <Button value="tan" onclick={props.onclick}class="btn btn-outline-dark"/>
        {' '}
        <Button value="log" onclick={props.onclick}class="btn btn-outline-dark"/>
        <br/>
        <Button value="√x" onclick={props.onclick}class="btn btn-outline-dark"/>
        {' '}
        <Button value="π" onclick={props.onclick}class="btn btn-outline-dark"/>
        {' '}
        <Button value="n!" onclick={props.onclick}class="btn btn-outline-dark"/>
        {' '}
        <Button value="e" onclick={props.onclick}class="btn btn-outline-dark"/>
        </div>
    );
}
export default Scientific;