import React, { Fragment, useState } from 'react';
import {
	Menu,
	Segment,
	Container,
	Header,
	Grid,
} from 'semantic-ui-react';



const Explanation = () => {
	return (
		<Grid columns={3} stackable={true}>
			<Grid.Column  style={{ paddingLeft: '0' }}>
				<Header textAlign="center" as="h3">
					Phonics is the First Step to Reading and Writing
				</Header>
				<p>
					Phonics are the sounds letters make when combined with
					individual or groups of letters (blends). Understanding
					these sounds will not only help children know which letters
					to use when spelling but also decode words when reading.
					Phonics involves matching the sounds of spoken English with
					individual letters or groups of letters. For example, the
					sound k can be spelled as c, k, ck or ch.
				</p>
				<img
					width="100%"
					src="https://www.benesse.co.jp/wk/phonics/img/img-what01.jpg"
				/>
			</Grid.Column>
			<Grid.Column>
				<Header textAlign="center" as="h3">
					Many Sounds, Few Letters.
				</Header>
				<p>
					English has many borrowed words that retain their original
					spelling and 40+ phonetic sounds repersented by only 26
					letters. Because of this it is more important to learn how
					different combinations of letters form specific sounds,
					rather than learning every individual sound of all 26
					letters (phonemic awareness). With that said, the individual
					sounds of all 26 letters is a good starting place and is the
					way we begin teaching phonics in Geekids classes.
				</p>
				<img
					src="https://www.benesse.co.jp/wk/phonics/img/img-what03.jpg"
					width="100%"
				/>
			</Grid.Column>
			<Grid.Column>
				<Header textAlign="center" as="h3">
					The standard Method in English-Speaking Countries.
				</Header>
				<p>
					Although not exclusive, phonics is by far the most common
					method of teaching children to read in Elementary school.
					After two years with no prior knowledge, many of our
					student's have a similar reading level to that of a typical
					American 1st grader.
				</p>
				<img
					src="https://www.benesse.co.jp/wk/phonics/img/img-what02.jpg"
					width="100%"
				/>
			</Grid.Column>
		</Grid>
	);
};

const Phonics = () => {
	const [activeItem, setActiveItem] = useState('explanation');

	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Container>
			<Menu style={{ background: 'white' }} attached="top" tabular>
				<Menu.Item
					name="explanation"
					active={activeItem === 'explanation'}
					onClick={handleItemClick}
				>
					Phonics?
				</Menu.Item>
				<Menu.Item
					name="Practice"
					active={activeItem === 'Practice'}
					onClick={handleItemClick}
				></Menu.Item>
			</Menu>
			<Segment attached="bottom">
				{activeItem === 'explanation' ? <Explanation /> : null}
			</Segment>
		</Container>
	);
};

export default Phonics;
