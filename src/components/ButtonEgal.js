import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
padding: 6px 12px;
background: #FA541C;
  border: none;
  border-radius: 4px;;
  color: #FAFAFA;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
  background: #ff7a45;
  }
	`;

const ButtonEgal = ({onClick,htmlType, style, children}) => (
	<StyledBtn
onClick={onClick}
		style={{...style}}
		htmlType={htmlType}
	>
		{children}
	</StyledBtn>
);

export default ButtonEgal;
