import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { LandingContainer, Title, GeeSpan, PlusSpan, Slogan } from './landing.styles';
import { useHistory } from 'react-router';

import LanguageToggle from '../../components/language-display-container/language-toggle';

const JapaneseSloganText = () => {
	return <div style={{color: "yellow", wordSpacing: "0.5rem"}}>いつでも <span style={{color: "white"}}>どこでも</span> ジィキッズ</div>
}

const EnglishSloganText = () => {
	return <div style={{wordSpacing: "0.3rem"}}>Your <span style={{color: "white"}}>Cirriculum</span>. Anytime. Anywhere</div>
}

const LandingPage = () => {

	let history = useHistory();
	const handleButtonClick = (e) => {
		console.log(e)
		history.push(`/${e.target.name}`);
	};
	return (
		<Container>
		<LandingContainer>
			
			<Title><GeeSpan>Geekids</GeeSpan><PlusSpan>Plus</PlusSpan></Title>
				
					<Slogan><LanguageToggle JpContent={()=>JapaneseSloganText()} EngContent={()=>EnglishSloganText()} /></Slogan>
			<div style={{marginTop: "3rem"}}>

			<Button
					
					name="home"
					onClick={handleButtonClick}
					size="big"
					color='green'
					
				>
					<LanguageToggle EngContent={()=>"Let's Go!"} JpContent={()=>"始めから"}/>
					
				</Button>

				<Button
					
					name="about"
					onClick={handleButtonClick}
					size="big"
					color='orange'
				><LanguageToggle EngContent={()=>'Get Started'} JpContent={()=>'コンセプト'}/></Button>

				</div>
			
		
		</LandingContainer>
		</Container>
	);
};

export default LandingPage;