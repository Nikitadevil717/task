import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Inputs from './components/input.js';
import Screen from './components/total.js';

// import './index.scss';

const GlobalStyle = createGlobalStyle`
  body, div, section, a, span, p, button, input {
    font: normal 18px/18px 'Roboto', sans-serif;
    line-height: 1;
    box-sizing: border-box;
    font-weight: 900;
  }
`;

const Wrapper = styled.div `
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 10px;
`;




class Container extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      number: '',
      operator: '',
      display: '0',
      resultDisplayed: false
    }

    this.onClicknumber = this.onClicknumber.bind(this);
    this.onClickOperator = this.onClickOperator.bind(this);
    this.onClickClean = this.onClickClean.bind(this);
  }

  onClicknumber(e, label){
    let operators = ['+', '-', '/', 'x'];
    let display;

    let displayString = this.state.display.toString();

    if(label === '.' && (displayString.match(/[.]+\d+/) || displayString.match(/[.*]/))) {
      return false;
    }

    if(this.state.display === '0' || operators.includes(this.state.display[0]) || this.state.resultDisplayed){
       display = label;
      this.setState({ resultDisplayed: false, });
    } else {
       display = this.state.display + label;
    }
    
    this.setState({ display: display });
  }

  onClickOperator(e, label){
    let operators = ['+', '-', '/', 'x'];


    if(operators.includes(this.state.display[0])) {
      this.setState({
        operator: label,
        display: label
      })
    } else {

      if(this.state.operator.length > 0){
        this.calculate();
        if(label === '='){
          this.setState({
            resultDisplayed: true,
            operator: ''
          });
        } else {
          this.setState({
            resultDisplayed: true,
            operator: label
          });
        }
      } else {
        this.setState({
          number: this.state.display,
          operator: label,
          display: label
        });
      }
    }
    
  }

  onClickClean(){
    this.setState({
      number: '',
      operator: '',
      display: '0',
      resultDisplayed: false
    });
  }

  calculate(){
      let displayResult;
      switch(this.state.operator){
        case '+':
          displayResult = parseFloat(this.state.number) + parseFloat(this.state.display);
          break;
        case '-':
          displayResult = parseFloat(this.state.number) - parseFloat(this.state.display);
          break;
        case '/':
          displayResult = parseFloat(this.state.number) / parseFloat(this.state.display);
          break;
        case 'x':
          displayResult = parseFloat(this.state.number) * parseFloat(this.state.display);
          break;
        default:
          console.log('Ooops!');
      }

      let displayString = displayResult.toString();
      
      if(displayString.match(/[^w]*e+\-+\w/)) {
        let firstNumber = displayString.match(/.+?(?=\e)/)[0];
        let secondNumber = displayString.match(/(?<=\-).*/)[0];
        let newTotalNumber = '.';

        for(let i = 0; i < parseInt(secondNumber) - 1; i++) {
          newTotalNumber += '0';
        }

        displayResult = newTotalNumber + firstNumber.replace(/[.]/, '');
      }

      this.setState({
        number: displayResult,
        display: displayResult
      });
  }
  render() {
    return (
      <Wrapper id="container">
        <GlobalStyle/>
        <Screen displayText={this.state.display} onClickClean={this.onClickClean}/>
        <Inputs onClicknumber={this.onClicknumber} onClickOperator={this.onClickOperator}/>
      </Wrapper>
    );
  }
};

ReactDOM.render(<Container/>, document.getElementById('calculator'));