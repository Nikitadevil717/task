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
    return (
      <div id="operations">
        {this.state.buttons.map((item) => (
          <Button key={ _.uniqueId()} className={'class'+item} label={item} onClick={this.props.onClick}/>
        ))}
      </div>
    );
  }
};