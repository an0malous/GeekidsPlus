import React, { useEffect } from 'react';
import api from '../../../api';
import { CardForm } from './CardForm';
import { useParams } from 'react-router';
import useInput from '../../../custom-hooks/use-Input';

const EditCard = () => {
	const { editCardId } = useParams();

	const { inputs, handleInputChange, handleSubmit, setInputs } = useInput(
		async event => {
			event.preventDefault();
			const { name, type, letter, img, audio } = inputs;
			if ((name, type, letter, img)) {
				try {
					const payload = {
						name,
						type,
						letter,
						img,
						audio,
					};
					await api.updateCard(editCardId, payload);
					this.setState({ redirect: true });
				} catch (err) {
					console.log(err);
				}
			}
		}
	);
	
	useEffect(() => {
		async function fetchData() {
			try {
				const res = await api.editCard(editCardId);

				const { name, type, letter, img, audio } = res.data;
				setInputs({ name, type, letter, img, audio: null });
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, []);

	return (
		<CardForm
			btnText="Update Card"
			handleChange={handleInputChange}
			onSubmit={handleSubmit}
			name={inputs.name}
			type={inputs.type}
			letter={inputs.letter}
			img={inputs.img}
			audio={inputs.audio}
		/>
	);
};

export default EditCard;
