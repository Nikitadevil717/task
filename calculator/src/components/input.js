import React from 'react';

import Operations from './operators.js';
import Numbers from './numbers.js';

export default class Inputs extends React.Component{
  render(){
    return (
      <div id="inputs">
        <Numbers onClick={this.props.onClicknumber} onClickTotal={this.props.onClickOperator}/>
        <Operations onClick={this.props.onClickOperator}/>
      </div>
    );
  }
};