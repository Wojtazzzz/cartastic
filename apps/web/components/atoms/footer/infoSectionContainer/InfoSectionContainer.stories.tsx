import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { InfoSectionContainer } from './InfoSectionContainer';

export default {
	title: 'Footer/atoms/InfoSectionContainer',
	component: InfoSectionContainer,
	decorators: [
		(Story) => (
			<div className="story-container w-[1000px] h-64">
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof InfoSectionContainer>;

type InfoSectionContainerStory = ComponentStory<typeof InfoSectionContainer>;

export const Default: InfoSectionContainerStory = (props) => {
	return (
		<InfoSectionContainer {...props}>
			<div className="w-full h-full bg-black text-white font-bold">
				THIS COMPONENT GETS ONLY 33% OF ALL SPACE {'(FOR SCREENS > LG)'}
			</div>
		</InfoSectionContainer>
	);
};

Default.args = {};
