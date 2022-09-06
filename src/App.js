import './App.css';
import LogoDRCNegro from './images/LogoDRCNegro.png'
import Button from './components/Button';
import Input from './components/Input';
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const addInput = value => {
    setInput(input + value)
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('Por favor agrega los valores para realizar el calculo')
    }
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          src={LogoDRCNegro}
          className='logo'
          alt='Logo calculator' />
      </div>
      <div className='calculator-container'>
        <Input input={input} />
        <div className='row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={result}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Clear manageClear={() => setInput('')}>
            Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
