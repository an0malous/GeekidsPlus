import React, { useState, Fragment } from 'react';
import { Accordion, Radio, Embed, Modal, Grid } from 'semantic-ui-react';
import { songData } from './song-data';
import DropdownMenu from './dropdown';

const date = new Date().getMonth();
function getMonth() {
	if (date > 3) {
		return date + 9;
	} else {
		return 13 - date;
	}
}
const Cirriculum = () => {
	const [activeIndex, setActiveIndex] = useState(getMonth());
	const [data, setData] = useState(null);
	const [checked, setCheck] = useState('3-5');
	const [currentVideo, setVideo] = useState(null);
	const [openModal, setOpenModal] = useState(false);
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
				onClose={() => setOpenModal(false)}
				onOpen={() => setOpenModal(true)}
				style={{
					margin: 0,
					padding: 0,
					backgroundColor: 'rgba(102,102,102, 0.9)',
					borderRadius: '15px',
				}}
				open={openModal}
				size="large"
			>
				<Modal.Content>
					<Embed
						id={currentVideo}
						defaultActive={true}
						source="youtube"
					/>
				</Modal.Content>
			</Modal>
			<DropdownMenu handleOnChange={handleOnChange} />
			<Grid columns={3}>
				<Grid.Row>
					<Grid.Column width={6}>
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
							<Fragment key={item.title.name}>
								<Accordion.Title
									active={activeIndex === index}
									index={index}
									onClick={handleClick}
								>
									{item.title.name}
								</Accordion.Title>
								<Accordion.Content
									active={activeIndex === index}
								>
									<ul>
										{checked !== 'active' ? (
											<li>
												Hello song:{item.hello.title}
											</li>
										) : (
											<li>
												Calendar Song:{' '}
												{item.calendar.title}
											</li>
										)}
										<li>TPR: {item.tpr.title}</li>
										{checked !== 'active' ? (
											<li>Abcs: {item.abc.title}</li>
										) : null}
										<li>Body: {item.body.title}</li>
										<li>Monthly: {item.monthly.title}</li>
										<li
											onClick={() => {
												setVideo(item.goodbye.id);
												setOpenModal(true);
											}}
										>
											Goodbye: {item.goodbye.title}
										</li>
									</ul>
								</Accordion.Content>
							</Fragment>
						);
					})}
				</Accordion>
			) : (
				'...Loading'
			)}
		</div>
	);
};

export default Cirriculum;
