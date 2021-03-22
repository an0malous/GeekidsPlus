import React, {Fragment} from 'react';
import CarouselMenu from '../../../../components/carousel-menu/carousel-menu.component';

const SelectMode = ({ gameType, gameLevel, setGameMode }) => {
	const blends = ['ch', 'sh', 'th  qu  wh', 'e', 'ck', 'ng'];
	const cvc = ['a', 'e', 'i', 'o', 'u'];
	
	return (
		<Fragment>
			{gameType === 'competitive' ? (
				<CarouselMenu style={{fontSize: "3rem"}}
					onClickItemTarget={(item) => {
					
						setGameMode(item);
						
					}}
					items={['classic', 'Marathon']}
				/>
			) : (
				<CarouselMenu
					onClickItemTarget={(item) => {
					
						setGameMode(item);
					
					}}
					items={gameLevel !== 'blends' ? cvc : blends}
				/>
			)}
			</Fragment>
	);
};

export default SelectMode;
