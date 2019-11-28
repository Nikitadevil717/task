import React from 'react';
import styled from 'styled-components';

const Display = styled.div `
	margin: 5px;
	text-align: right;
	padding: 30px 15px;
	border: 2px solid black;
	position: relative;
	padding-left: calc(10px + 22px + 10px);
`;

const Clean = styled.span `
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 19px;
	border-radius: 50%;
	background: black;
	color: white;
	width: 22px;
	height: 22px;
	text-align: center;
	cursor: pointer;
`;

const Close = styled.span

export default class Screen extends React.Component{
  render(){
    return (
      <Display id="display">
        <Clean className="clean" onClick={this.props.onClickClean}>x</Clean>
        {this.props.displayText}
      </Display>
    );
  }
}