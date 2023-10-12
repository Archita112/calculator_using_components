import React, { Component } from 'react';

class Calculator extends Component{
  constructor(){
    super();
    this.state = {
      display: 0,
      prevValue: 'null',
      operator: 'null'
    }
  }

  handleNumberclick = (value) => {
    const { display, prevValue, operator} = this.state;

    if(value === 'C'){
      this.setState ({
        display: 0,
        prevValue: 'null',
        operator: 'null'
      });
    }
    else if (!isNaN(value)) {
      if (display === '0' || operator === '=') {
        this.updateDisplay(value);
      } else {
        this.updateDisplay(display + value);
      }
    }
    else{

      switch (value){
        case '+':
        case '-':
        case '*':
        case '/':
          if (prevValue !== null) {
            this.calculateResult();
          }
          this.setState(
            { prevValue: display, 
              operator: value, 
              display: '0' }
              );
          break;
        case '=':
          this.calculateResult();
          break;
        default:
          break;
      }
    }
  };

  updateDisplay = (value) => {
    this.setState({ display: value });
  };

  calculateResult = () => {
    const { display, prevValue, operator } = this.state;
    const currentValue = parseFloat(display);
    const previousValue = parseFloat(prevValue);

    if (operator === '+') {
      this.updateDisplay(previousValue + currentValue);
    } 
    else if (operator === '-') {
      this.updateDisplay(previousValue - currentValue);
    } 
    else if (operator === '*') {
      this.updateDisplay(previousValue * currentValue);
    } 
    else if (operator === '/') {
      this.updateDisplay(previousValue / currentValue);
    }

    this.setState(
      { prevValue: 'null', 
      operator: '=' 
    }
  );
};

  render(){
    return (
      <div className="Calculator">
      <div className='upper-part'>{this.state.display}</div>
      <div className='lower-part'>
        <div className='section-1'>
        <button onClick={() => this.handleNumberclick('C')}>C</button>
        <button onClick={() => this.handleNumberclick('9')}>9</button>
        <button onClick={() => this.handleNumberclick('=')}>=</button>
        <button onClick={() => this.handleNumberclick('+')}>+</button>
        </div>
        <div className='section-2'>
        <button onClick={() => this.handleNumberclick('8')}>8</button>
        <button onClick={() => this.handleNumberclick('7')}>7</button>
        <button onClick={() => this.handleNumberclick('6')}>6</button>
        <button onClick={() => this.handleNumberclick('-')}>-</button>
        </div>
        <div className='section-3'>
        <button onClick={() => this.handleNumberclick('5')}>5</button>
        <button onClick={() => this.handleNumberclick('4')}>4</button>
        <button onClick={() => this.handleNumberclick('3')}>3</button>
        <button onClick={() => this.handleNumberclick('/')}>/</button>
        </div>
        <div className='section-4'>
        <button onClick={() => this.handleNumberclick('2')}>2</button>
        <button onClick={() => this.handleNumberclick('1')}>1</button>
        <button onClick={() => this.handleNumberclick('0')}>0</button>
        <button onClick={() => this.handleNumberclick('*')}>*</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Calculator;