import React, {Fragment} from 'react';
import CarouselMenu from '../../../../components/carousel-menu/carousel-menu.component';
import LanguageToggle from '../../../../components/language-display-container/language-toggle'


const SelectMode = ({ gameType, gameLevel, setGameMode }) => {
	const blends = ['ch', 'sh', 'th  qu  wh', 'e', 'ck', 'ng'];
	const cvc = ['a', 'e', 'i', 'o', 'u'];

	
	return (
		<Fragment>
			{gameType === 'competitive' ? (
				<CarouselMenu style={{fontSize: "rem"}}
					onClickItemTarget={(item) => {
					
						setGameMode(item);
						
					}}
					items={[<LanguageToggle EngContent={()=><Fragment>Classic</Fragment>} JpContent={()=><Fragment>クラシック</Fragment>} />, <LanguageToggle EngContent={()=><Fragment>Marathon</Fragment>} JpContent={()=><Fragment>マラソン</Fragment>} />]}
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
