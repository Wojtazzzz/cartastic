import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from './Footer';

export default {
	title: 'Footer/organisms/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

type FooterStory = ComponentStory<typeof Footer>;

export const Default: FooterStory = () => {
	return <Footer />;
};
