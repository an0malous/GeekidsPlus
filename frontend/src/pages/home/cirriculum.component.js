import React, { useState, Fragment } from 'react';
import { Accordion, Radio } from 'semantic-ui-react';
import { songData } from './song-data';
import DropdownMenu from './dropdown';
const Cirriculum = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const [data, setData] = useState(null);
	const handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const newIndex = activeIndex === index ? -1 : index;

		setActiveIndex(newIndex);
	};

   const handleOnChange = (e, data) => {
      const newData = songData.filter(item=>item.school === data.value)
      console.log(newData)
      setData(newData)
      
   }
 
	return (
	<div>
			<DropdownMenu
				handleOnChange={handleOnChange}
			/>
         <Radio label="Parents" /><Radio label="3-5" /><Radio label="Active English" />
			{data ? (<Accordion styled>
				{data[0].parents.map((item, index) => {
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
									<li>Hello song: {item.hello}</li>
									<li>TPR: {item.tpr}</li>
									<li>Body: {item.body}</li>
									<li>Monthly: {item.monthly}</li>
                           <li>Goodbye: {item.monthly}</li>
								</ul>
                        
							</Accordion.Content>
						</Fragment>
					);
				})}
			</Accordion>): null}
		</div>
	);
};

export default Cirriculum;
