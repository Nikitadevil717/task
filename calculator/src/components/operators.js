import React from 'react';
import _ from "lodash";

import Button from './button.js';

export default class Operations extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      buttons: ['+', '-', '/', 'x']
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
      <div id="operations">
        {buttonElements}
      </div>
    );
  }
};