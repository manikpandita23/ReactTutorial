import React, { useState } from 'react';

const Calculator = () => {
  const [state, setState] = useState({
    currentNumber: '',
    previousNumber: '',
    operation: '',
  });

  const handleNumberClick = (number) => {
    setState({ ...state, currentNumber: state.currentNumber + number });
  };

  const handleOperationClick = (operation) => {
    setState({ ...state, operation, previousNumber: state.currentNumber, currentNumber: '' });
  };

  const handleEqualsClick = () => {
    const { currentNumber, previousNumber, operation } = state;
    let result;

    switch (operation) {
      case '+':
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case '*':
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;
      default:
        result = 0;
    }

    setState({ ...state, currentNumber: result.toString(), previousNumber: '', operation: '' });
  };

  const handleClearClick = () => {
    setState({ currentNumber: '', previousNumber: '', operation: '' });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-end mb-4">
        <p className="text-3xl">{state.currentNumber}</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('7')}>7</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('8')}>8</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('9')}>9</button>
        <button className="bg-orange-500 hover:bg-orange-600 rounded-lg p-4 text-white" onClick={() => handleOperationClick('/')}>/</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('4')}>4</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('5')}>5</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('6')}>6</button>
        <button className="bg-orange-500 hover:bg-orange-600 rounded-lg p-4 text-white" onClick={() => handleOperationClick('*')}>*</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('1')}>1</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('2')}>2</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('3')}>3</button>
        <button className="bg-orange-500 hover:bg-orange-600 rounded-lg p-4 text-white" onClick={() => handleOperationClick('-')}>-</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={() => handleNumberClick('0')}>0</button>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4" onClick={handleClearClick}>C</button>
        <button className="bg-orange-500 hover:bg-orange-600 rounded-lg p-4 text-white" onClick={handleEqualsClick}>=</button>
        <button className="bg-orange-500 hover:bg-orange-600 rounded-lg p-4 text-white" onClick={() => handleOperationClick('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
