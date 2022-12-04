import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImagesCount } from './ImagesCount';

export default {
	title: 'Card Offer/atoms/ImagesCount',
	component: ImagesCount,
	decorators: [
		(Story) => (
			<div className="story-container w-64 h-64">
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof ImagesCount>;

type ImagesCountStory = ComponentStory<typeof ImagesCount>;

export const Default: ImagesCountStory = (props) => {
	return <ImagesCount {...props} />;
};

Default.args = {
	count: 20,
};
