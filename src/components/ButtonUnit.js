import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
padding: 6px 12px;
background: #FA541C;
  border: none;
  border-radius: 4px;
  color: #BFBFBF;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  
    &:hover {
  background: #ff7a45;
  }

	`;

const ButtonUnit = ({children, onClick, style, value}) => (
	<StyledBtn
		style={{...style}}
		onClick={onClick}
		value={value}
			>
		{children}
	</StyledBtn>
);

export default ButtonUnit;
