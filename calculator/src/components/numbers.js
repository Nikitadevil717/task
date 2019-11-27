import React from 'react';
import _ from "lodash";

import Button from './button.js';

export default class Numbers extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
    }
  }

  render() {
    let buttonElements = [];
    for(let value of this.state.buttons){
      buttonElements.push(
        <Button key={ _.uniqueId()} label={value} onClick={this.props.onClick}/>
      );
    }
    return (
      <div id="numbers">
        {buttonElements}
        <Button label="=" onClick={this.props.onClickTotal} className="greenBtn"/>
      </div>
    );
  }
};