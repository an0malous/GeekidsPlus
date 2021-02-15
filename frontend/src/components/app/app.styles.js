import styled, { css } from 'styled-components';

const overlayIsActive = css`

	position: absolute;
   left: 0;
   top: 0px;
	z-index: -1;
	width: 100%;
	height: 100% ;
	background: rgba(22, 22, 22, 0.95);
`;


export const Overlay = styled.div`
	${overlayIsActive}
`;
