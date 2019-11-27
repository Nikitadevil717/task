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
    return (
      <div id="numbers">
        {this.state.buttons.map((item) => (
          <Button key={ _.uniqueId()} className={'class'+item} label={item} onClick={this.props.onClick}/>
        ))}
        <Button label="=" onClick={this.props.onClickTotal} className="greenBtn"/>
      </div>
    );
  }
};