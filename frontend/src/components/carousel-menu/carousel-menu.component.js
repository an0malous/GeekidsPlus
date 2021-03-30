import React, { useState, Fragment } from 'react';
import { useTransition, animated } from 'react-spring';
import { Grid, Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarouselMenu = ({ items, onClickItemTarget, style }) => {
	const [currentItem, setCurrentItem] = useState(0);
	const [targetedArrow, setTargetedArrow] = useState({
		leave: '50%',
		from: '-100%',
	});
	const transitions = useTransition(currentItem, (key) => key, {
		from: {
			opacity: 0,
			transform: `translate3d(${targetedArrow.from},0,0)`,
		},
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: {
			opacity: 0,
			transform: `translate3d(${targetedArrow.leave},0,0)`,
		},
	});
	return (
		<Grid textAlign="center" centered={true} verticalAlign="middle">
			<Grid.Column
				style={{ display: 'flex', justifyContent: 'left' }}
				color="black"
			>
				<FontAwesomeIcon
					style={{ display: 'flex', justifySelf: 'left' }}
					icon="angle-double-left"
					color="white"
					size="lg"
					onClick={
						currentItem !== 0
							? () => {
									setTargetedArrow({
										leave: '-50%',
										from: '100%',
									});
									setCurrentItem((prevItem) => prevItem - 1);
							  }
							: () => {
									setTargetedArrow({
										leave: '-50%',
										from: '100%',
									});
									setCurrentItem(items.length - 1);
							  }
					}
				/>
			</Grid.Column>

			<Grid.Column
				style={{
					...style,
					display: 'flex',
					height: '60vh',
					justifyContent: 'center',
					alignItems: 'center',
					overflow: 'hidden',
				}}
				width={12}
			>
				{onClickItemTarget ? (
					<div onClick={() => onClickItemTarget(items[currentItem])}>
						{transitions.map(({ item, props, key }) => {
							return (
								<animated.div
									key={key}
									style={{ position: 'absolute', ...props }}
								>
									{items[item]}
								</animated.div>
							);
						})}
					</div>
				) : (
					<Fragment>
						{transitions.map(({ item, props, key }) => {
							return (
								<animated.div
									key={key}
									style={{ position: 'absolute', ...props }}
								>
									{items[item]}
								</animated.div>
							);
						})}
					</Fragment>
				)}
			</Grid.Column>

			<Grid.Column s color="black" textAlign="center">
				<FontAwesomeIcon
					icon="angle-double-left"
					color="white"
					size="lg"
					onClick={
						currentItem !== items.length - 1
							? () => {
									setTargetedArrow({
										leave: '50%',
										from: '-100%',
									});
									setCurrentItem((prevItem) => prevItem + 1);
							  }
							: () => {
									setTargetedArrow({
										leave: '50%',
										from: '-100%',
									});
									setCurrentItem(0);
							  }
					}
				/>
			</Grid.Column>
		</Grid>
	);
};

export default CarouselMenu;
