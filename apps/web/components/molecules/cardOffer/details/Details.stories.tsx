import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Details } from './Details';

export default {
	title: 'Card Offer/molecules/Details',
	component: Details,
	decorators: [
		(Story) => (
			<div className="w-fit">
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof Details>;

type DetailsStory = ComponentStory<typeof Details>;

export const Default: DetailsStory = (props) => {
	return <Details {...props} />;
};

Default.args = {};
