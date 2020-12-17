import styled, { css } from 'styled-components';

const overlayIsActive = css`

	position: absolute;
   left: 0;
   top: 0px;
	z-index: -1;
	width: 100%;
	height: 100% ;
	background: rgba(22, 22, 22, 0.8);
`;

const isLoggedIn = (props) => {
	if (props.loggedIn) {
		return overlayIsActive;
	}

	return 'display: none';
};

export const Overlay = styled.div`
	${isLoggedIn}
`;
