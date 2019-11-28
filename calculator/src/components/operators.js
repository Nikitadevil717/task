import React from 'react';
import _ from "lodash";
import styled from 'styled-components';

import Button from './button.js';

const Wrapper = styled.div `
    display: grid;
    flex: 25% 0 0;
`;

const ButtonOperator = styled(Button) `
    border: 2px solid #97b1cb;
`;

export default class Operations extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      buttons: ['+', '-', '/', 'x']
    }
  }

  render() {
    return (
      <Wrapper id="operations">
        {this.state.buttons.map((item) => (
          <ButtonOperator key={ _.uniqueId()} className={'class'+item} label={item} onClick={this.props.onClick}/>
        ))}
      </Wrapper>
    );
  }
};