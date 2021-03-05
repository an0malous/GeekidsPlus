import React, { useState } from 'react';
import { Header } from 'semantic-ui-react';
import LanguageToggle from '../../../../components/language-display-container/language-toggle';
import bronze from '../../../../asssets/img/bronze-medal.svg';
import silver from '../../../../asssets/img/silver-medal.svg';
import gold from '../../../../asssets/img/winner.svg';
import master from '../../../../asssets/img/chevron.svg';
import CarouselMenu from '../../../../components/carousel-menu/carousel-menu.component';


const Caption = ({ header, content }) => {
	return (
		<div>
			<Header as="h3" textAlign="center">
				{header}
			</Header>
			{content}
		</div>
	);
};


const SelectLevel = ({ setGameLevel }) => {
	const [currentItem, setCurrentItem] = useState(null);
    const items = [
        <div onClick={()=>setGameLevel('initialSounds')}>
            <img  src={bronze} width="100%" />
            <LanguageToggle
                EngContent={() => (
                    <Caption
                        header="Initial Sounds"
                        content="These are all the basic sounds in the English Language."
                    />
                )}
                JpContent={() => (
                    <Caption
                        header="基本の音"
                        content="英語の基本の音です。これはマスターしたらきれいな発音ができます。"
                    />
                )}
            />
        </div>,
        <div onClick={()=>setGameLevel('cvc')} >
            <img src={silver} width="100%" />
            <LanguageToggle
                EngContent={() => (
                    <Caption
                        header="CVC"
                        content="CVC means Consonant - Vowel - Consonant. These three letter words are the foundation for spelling."
                    />
                )}
                JpContent={() => (
                    <Caption
                        header="CVC"
                        content="この三つのアルファベットの言葉は英語の基礎です。"
                    />
                )}
            />
        </div>,
        <div onClick={()=>setGameLevel('cvcAdd')}>
            <img src={gold} width="100%" />
            <LanguageToggle
                EngContent={() => (
                    <Caption
                        header="Easy CVC Blends"
                        content='These words build upon CVC words by including an extra letter that creates a "blend".'
                    />
                )}
                JpContent={() => (
                    <Caption
                        header="単純なCVCのブレンド"
                        content="CVCの基礎からレベルアップのやつ。ファックヤー！"
                    />
                )}
            />
        </div>,
        <div onClick={()=>setGameLevel('blends')}>
            <img src={master} width="100%" />
            <LanguageToggle
                EngContent={() => (
                    <Caption
                        header="Difficult CVC Blends"
                        content="These words build upon CVC words by including an extra letters. Many of these blends are difficult to create just be listening."
                    />
                )}
                JpContent={() => (
                    <Caption
                        header="難しいCVCのブレンド"
                        content="CVCの基礎からレベルアップのやつ。ファックヤー！"
                    />
                )}
            />
        </div>,
    ];
	return <CarouselMenu handleOnChange={setCurrentItem} items={items} />;
};

export default SelectLevel;
