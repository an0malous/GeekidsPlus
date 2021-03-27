import styled from 'styled-components';

export const LandingContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: left;
	height: 50vh;

	@media (min-width: 1100px) {
		margin-top: -60px;
		padding-left: 80px;
	}
`;

export const Slogan = styled.h2`
	color: yellow;
	font-size: 1.1rem;
	line-height: 0.25;
	text-align: right;
	margin: 0;
	text-shadow: 1px 1px black;
	@media (min-width: 1100px) {
		font-size: 2rem;
	}
`;

export const Title = styled.h1`
	font-family: 'Alfa Slab One', cursive;
	font-size: 2.825rem;
	line-height: 0;
	margin-bottom: 5;
	letter-spacing: 0.2rem;
	text-shadow: 1px 1px black;
	@media (min-width: 1000px) {
		font-size: 5rem;
	}
`;

export const GeeSpan = styled.span`
	color: orange;
	line-height: 0em;
`;

export const PlusSpan = styled.span`
	color: white;
	line-height: 0em;
`;
