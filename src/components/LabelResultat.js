import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.div`
padding: 6px 12px;
background: #FAFAFA;
border-radius: 4px;
border: 1px solid rgba(0, 0, 0, 0,3)
transition: all 0.3a ease-in-out;

&:hover, &:focus {
border-color. #FA541C
}
`;
const LabelResultat = ({resultat, style}) => (
	<StyledInput
		resultat={resultat}
		style={{...style}}
	>
		{resultat !== '' ? (

			<div>{resultat}</div>

		) : (
			<div style={{textAlign: 'center'}}>0</div>

		)}
	</StyledInput>
);


export default LabelResultat;
