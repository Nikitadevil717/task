import React from 'react';
import styled from 'styled-components';

import Operations from './operators.js';
import Numbers from './numbers.js';

const Wrapper = styled.div `
    display: flex;
`;

export default class Inputs extends React.Component{
  render(){
    return (
      <Wrapper id="inputs">
        <Numbers onClick={this.props.onClicknumber} onClickTotal={this.props.onClickOperator}/>
        <Operations onClick={this.props.onClickOperator}/>
      </Wrapper>
    );
  }
};