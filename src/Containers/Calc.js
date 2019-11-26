import React from 'react';
import Input from '../Components/Input';
import Buttons from '../Components/Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scientific from './Scientific'
export class Calc extends React.Component{
constructor(props){
    super(props);
    this.state={first:'',op: '',input:0 ,operatorPressed:false, scientific:false
}}

buttonPress(event){
    if(this.state.input=='0'){
       this.state.input=''; 
   }
   this.setState({...this.state,input:this.state.input+event.target.innerText.toString(),operatorPressed:false,});
   
}
calculate(a,operator,b){
    return eval(parseFloat(a)+operator+parseFloat(b));
}
setOperator(event){
    let fst='';
   
    if(this.state.first===''){
        fst=this.state.input;
       
    }
    else{
        fst = this.calculate(this.state.first,this.state.op,this.state.input);
        
    }
    if(isNaN(fst)){
        alert("Invalid entry");
        this.clearAll();
        return;
    }
    this.setState({...this.state,first: fst, input: '', op: event.target.innerText, operatorPressed: true, });
}
showResult(){
    
    
    this.setState({...this.state,input: this.calculate(this.state.first,this.state.op===''?'+':this.state.op,this.state.input),operatorPressed:false ,first:'',op:'', });
    if(isNaN(this.state.input) ){
        alert("Invalid option");
        this.clearAll();
    }
}
clearAll(){
    this.setState({...this.state,first:'',op: '',input:0,operatorPressed:false, });
}
decimalPress(){
   
    if(!this.state.input.toString().includes(".")){
        this.operatorPressed=false;
        if(this.state.input===''){
            this.state.input=0;
        }
    this.setState({...this.state,input:this.state.input.toString()+'.', });}
}
clear(){
    if(this.state.input!=''){
    this.operatorPressed=false;
    this.setState({...this.state,input:this.state.input.toString().length==1?0:this.state.input.toString().substring(0,this.state.input.toString().length-1), })
    }
}
factorial(n){
    if(n<=1){
        return 1;
    }
    return n*this.factorial(n-1);
}
scientific(event){
    let input=this.state.input; 
    let op=event.target.innerText;
    let result='';
    if(op==="cos"){
        result=Math.cos(parseFloat(input));
    }
    else if(op==="sin"){
        result=Math.sin(parseFloat(input));
    }
    else if(op==="tan"){
        result=Math.tan(parseFloat(input));
    }
    else if(op==="log"){
        result=Math.log(parseFloat(input));
    }
    else if(op==="√x"){
        result=Math.sqrt(parseFloat(input));
    }
    else if(op==="π"){
        result=Math.PI;
    }
    else if(op==="n!"){
        result=this.factorial(parseInt(input));
    }
    else if(op==="e"){
        result=Math.E;
    }
    this.setState({...this.state,first:'',input:result,op:'',operatorPressed:false})
}
switchScientific(){
    this.setState({...this.state, scientific:!this.state.scientific});
}
render(){
    var jsx='';
    if(this.state.scientific){
        jsx=<Scientific onclick={this.scientific.bind(this)}class="btn btn-outline-secondary"/>
    }
  
    return (
        <>
        <br/>
        <div className="container">
        <Input  value={this.state.operatorPressed?this.state.first:this.state.input} operator={this.state.op}/></div>
        <div className="container " >
             
        <Buttons value="9" key="9" onclick={this.buttonPress.bind(this)} class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="8" key="8" onclick={this.buttonPress.bind(this)}class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="7" key="7" onclick={this.buttonPress.bind(this)}class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="+" onclick={this.setOperator.bind(this)}class="btn btn-outline-success"/>
        {' '}
        <Buttons value="Clear All" onclick={this.clearAll.bind(this)}class="btn btn-danger"/>
        <br/>
        
        <Buttons value="6" key="6" onclick={this.buttonPress.bind(this)}class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="5" key="5" onclick={this.buttonPress.bind(this)}class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="4" key="4" onclick={this.buttonPress.bind(this)}class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="-"onclick={this.setOperator.bind(this)}class="btn btn-outline-success"/>
        <br/>
        <Buttons value="3" key="3" onclick={this.buttonPress.bind(this)}class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="2" key="2" onclick={this.buttonPress.bind(this)}class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="1" key="1" onclick={this.buttonPress.bind(this)}class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="*"onclick={this.setOperator.bind(this)}class="btn btn-outline-success"/>  
        <br/>        
        <Buttons value="=" onclick={this.showResult.bind(this)}class="btn btn-outline-success"/>
        {' '}
        <Buttons value="0" key="0" onclick={this.buttonPress.bind(this)}class="btn btn-outline-primary"/>
        {' '}
        <Buttons value="." key="." onclick={this.decimalPress.bind(this)}class="btn btn-outline-secondary"/>
        {' '}
        <Buttons value="Clr" onclick={this.clear.bind(this)}class="btn btn-warning"/>
        <br/>
      
       {jsx}
       <br/>
       <Buttons value={this.state.scientific?"Hide Scientific":"Show Scientific"}  onclick={this.switchScientific.bind(this)}class="container btn btn-outline-success"/>
       </div>
      
        </>
        );
}
}
