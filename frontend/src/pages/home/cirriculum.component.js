import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Radio, Embed, Modal, Grid } from 'semantic-ui-react';
import { songData } from './song-data';
import DropdownMenu from './dropdown';
const Cirriculum = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const [data, setData] = useState(null);
	const [checked, setCheck] = useState('3-5');
	const [ open, setOpen ] = useState(false)
	const handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const newIndex = activeIndex === index ? -1 : index;

		setActiveIndex(newIndex);
	};

	const handleOnChange = (e, data) => {
		const newData = songData.filter((item) => item.school === data.value);
		console.log(newData);
		setData(newData);
	};

	return (
		<div>
		<Modal
		centered={true}
			basic
			closeOnDimmerClick={false}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			style={{margin: 0, padding: 0, backgroundColor: "rgba(102,102,102, 0.9)", borderRadius: "15px"}}
			open={open}
			size="huge"
		>
			<Modal.Content>
			<Embed
    id='O6Xo21L0ybE'
    placeholder='/images/image-16by9.png'
    source='youtube'
  />
			</Modal.Content>
		</Modal>
			<DropdownMenu handleOnChange={handleOnChange} />
			<Grid columns={3} >
			<Grid.Row>
				<Grid.Column width={6} >
					<Radio
						label="Parents"
						name="radioGroup"
						value="parents"
						checked={checked === 'parents'}
						onChange={() => setCheck('parents')}
					/>
				</Grid.Column>
				<Grid.Column width={4}>
					<Radio
						label="3-5"
						value="3-5"
						checked={checked === '3-5'}
						onChange={() => setCheck('3-5')}
					/>
				</Grid.Column>

				<Grid.Column width={6}>
					<Radio
						label="Active English"
						value="active"
						checked={checked === 'active'}
						onChange={() => setCheck('active')}
					/>
				</Grid.Column>
				</Grid.Row>
			</Grid>

			{data ? (
				<Accordion styled>
					{data[0][checked].map((item, index) => {
						return (
							<Fragment>
								<Accordion.Title
									active={activeIndex === index}
									index={index}
									onClick={handleClick}
								>
									{item.title}
								</Accordion.Title>
								<Accordion.Content
									active={activeIndex === index}
								>
									<ul>
										<li>Hello song:{item.hello}</li>
										<li>TPR: {item.tpr}</li>
										<li>Body: {item.body}</li>
										<li>Monthly: {item.monthly}</li>
										<li>Goodbye: {item.monthly}</li>
									</ul>
								</Accordion.Content>
							</Fragment>
						);
					})}
				</Accordion>
			) : null}
		</div>
	);
};

export default Cirriculum;
