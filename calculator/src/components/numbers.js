import React from 'react';
import _ from "lodash";
import styled from 'styled-components';

import Button from './button.js';

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex: 75% 0 0;
`;

const ButtonGreen = styled(Button) `
    border: 2px solid #5aa698;
`;

export default class Numbers extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
    }
  }

  render() {
    return (
      <Wrapper id="numbers">
        {this.state.buttons.map((item) => (
          <Button key={ _.uniqueId()} className={'class'+item} label={item} onClick={this.props.onClick}/>
        ))}
        <ButtonGreen label="=" onClick={this.props.onClickTotal} className="greenBtn"/>
      </Wrapper>
    );
  }
};