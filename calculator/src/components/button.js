import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button `
    border: 2px solid #E0E0E0;
    margin: 5px;
    width: calc(100% - 10px);
    padding: 22% 0;
    text-align: center;
    background: transparent;
    outline: none;
    cursor: pointer;
`;

export default class Button extends React.Component{
  render(){
    let classes = ['defaultButton'];
    classes.push(this.props.className);
    return (
      <Buttons type="button" className={classes.join(' ')} onClick={(e) => this.props.onClick(e, this.props.label)}>
        {this.props.label}
      </Buttons>
    );
  }
};