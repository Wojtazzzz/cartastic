import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './Link';

export default {
	title: 'Main Library/atoms/Link',
	component: Link,
} as ComponentMeta<typeof Link>;

type LinkStory = ComponentStory<typeof Link>;

export const Default: LinkStory = (props) => {
	return <Link {...props} />;
};

Default.args = {
	href: '/',
	children: 'Example link',
};
