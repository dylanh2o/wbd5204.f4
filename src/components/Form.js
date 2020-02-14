import React, {useEffect, useState} from 'react';
import ButtonEgal from "./ButtonEgal";
import ButtonUnit from "./ButtonUnit";
import ButtonPlus from "./ButtonPlus";
import ButtonMoins from "./ButtonMoins";
import ButtonFois from "./ButtonFois";
import ButtonDiviser from "./ButtonDiviser";
import ButtonClear from "./ButtonClear";
import ButtonC from "./ButtonC";
import LabelResultat from "./LabelResultat";


const Form = () => {
	const [result, setResult] = useState('');
	const [calcul, setCalcul] = useState('');
	var showResult = '';
	if (result === '') {
		showResult = calcul;
	} else {
		showResult = calcul + '=' + result;
	}
	const unitAdd = (event) => {
		const value = event.target.value;
		setCalcul(calcul + value);
	};

	const clear = () => {
		setCalcul('');
		setResult('');
	};
	const c = () => {
		setCalcul(calcul.substring(0, calcul.length - 1));
	};
	const calculer = () => {
		setResult(eval(calcul));
	};
	/*
		useEffect(() => {

			try {
				setResult(eval(calcul));
			} catch (e) {
				if (e instanceof SyntaxError) {
					//alert(e.message);
				}
			}
		}, );
	*/
	return (

		<>

			<div style={{textAlign: 'center'}}>
				<h1>Calculatrice</h1>
				<LabelResultat resultat={showResult}></LabelResultat>
				<ButtonUnit value="1" onClick={unitAdd}>1</ButtonUnit>
				<ButtonUnit value="2" onClick={unitAdd}>2</ButtonUnit>
				<ButtonUnit value="3" onClick={unitAdd}>3</ButtonUnit>
				<ButtonUnit value="4" onClick={unitAdd}>4</ButtonUnit>
				<ButtonUnit value="5" onClick={unitAdd}>5</ButtonUnit>
				<ButtonUnit value="6" onClick={unitAdd}>6</ButtonUnit>
				<ButtonUnit value="7" onClick={unitAdd}>7</ButtonUnit>
				<ButtonUnit value="8" onClick={unitAdd}>8</ButtonUnit>
				<ButtonUnit value="9" onClick={unitAdd}>9</ButtonUnit>
				<ButtonUnit value="0" onClick={unitAdd}>0</ButtonUnit>
				<ButtonPlus value="+" onClick={unitAdd}>+</ButtonPlus>
				<ButtonMoins value="-" onClick={unitAdd}>-</ButtonMoins>
				<ButtonFois value="*" onClick={unitAdd}>*</ButtonFois>
				<ButtonDiviser value="/" onClick={unitAdd}>/</ButtonDiviser>
				<ButtonC value="" onClick={c}>C</ButtonC>
				<ButtonClear value="" onClick={clear}>Clear</ButtonClear>
				<ButtonEgal onClick={calculer}>=</ButtonEgal>
			</div>
		</>
	);
};

export default Form;
