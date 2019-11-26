import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
const Input=function(props){
    return(<div >
      <input className="form-control" type="text" value={props.value} readOnly/>
    <span>{props.operator}</span>
    </div>);
}
export default Input;