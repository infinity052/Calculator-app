import React from 'react';
import {Calc} from './Containers/Calc';

import Scientific from './Containers/Scientific';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return (
      <>
       <Calc/>
       
       </>
    );
  }
}