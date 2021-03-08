import React from 'react';
import CarouselMenu from '../../../../components/carousel-menu/carousel-menu.component';
import { Container } from 'semantic-ui-react';

const SelectMode = ({ gameType, gameLevel, setGameMode }) => {
	const blends = ['ch', 'sh', 'wh', 'th', 'ck', 'e', 'random'];
	const cvc = ['a', 'e', 'i', 'o', 'u', 'random'];
	return (
		<Container>
			{gameType === 'competitive' ? (
				<CarouselMenu
					onClickItemTarget={(item) => {
						console.log(item);
						setGameMode(item);
						
					}}
					items={['classic', 'marathon']}
				/>
			) : (
				<CarouselMenu
					onClickItemTarget={(item) => {
						console.log(item);
						setGameMode(item);
					
					}}
					items={gameLevel !== 'blends' ? cvc : blends}
				/>
			)}
		</Container>
	);
};

export default SelectMode;
