// > et <
import './App.css';
import { useState } from 'react';


function App() {
	

	//donner la funtionnalité a notre calculatrice
	const [calc , setCalc] = useState('');
	const [result, setResult] = useState('');

	const ops = ['/', '*', '+' , '-', '.'];

	const updateCalc = value => { 
		//UPDATE CALC FUNCTION 
		if(
			ops.includes(value) && calc === '' || 
			ops.includes(value) && ops.includes(calc.slice(-1)
			)
		) {
			return;
		}

		setCalc(calc + value)
		//update la somme du calcul
		if(!ops.includes(value)){
			setResult(eval(calc + value).toString());
		}

	}


	//creer nos nombres de 1 a 9
	const createDigits = () =>{
	const digits = [];

		for (let i = 1 ; i < 10; i++) {
			digits.push(
				<button onClick={() => updateCalc(i.toString())}key= {i}>
					{i}
				</button>
			)
		}
		return digits
	}
	 
	// fucntion pour le resultat
	const calculate =() => {
		setCalc(eval(calc).toString());
	}

	const deleteLast = () => {
		if(calc == '') {
			return;
		}
		const value = calc.slice(0, -1)

		setCalc(value);
	} 

    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            { result ? <span>({ result })</span> : ''} {calc || '0'}
          </div>
			{/* nos operateurs */}
        <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            
			<button onClick={deleteLast}>DEL</button>
		</div>
			{/* nos digits */}
		<div className="digits">
			{createDigits()}
			<button onClick={() => updateCalc('0')}>0</button>
			<button onClick={() => updateCalc('.')}>.</button>
			
			<button onClick={calculate}>=</button>
		</div>
		</div>
      </div>
    );
}

export default App;
