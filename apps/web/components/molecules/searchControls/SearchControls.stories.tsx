import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Formik } from 'formik';
import { SearchControls } from './SearchControls';

export default {
	title: 'Main Library/molecules/SearchControls',
	component: SearchControls,
	decorators: [
		(Story) => (
			<Formik initialValues={{}} onSubmit={console.log}>
				<Story />
			</Formik>
		),
	],
} as ComponentMeta<typeof SearchControls>;

type SearchControlsStory = ComponentStory<typeof SearchControls>;

export const Default: SearchControlsStory = (props) => {
	return <SearchControls {...props} />;
};

Default.args = {};

Default.parameters = {
	backgrounds: {
		default: 'dark',
	},
};
