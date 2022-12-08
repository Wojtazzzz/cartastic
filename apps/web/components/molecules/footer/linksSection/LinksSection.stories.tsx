import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksSection } from './LinksSection';

export default {
	title: 'Footer/molecules/LinksSection',
	component: LinksSection,
} as ComponentMeta<typeof LinksSection>;

type LinksSectionStory = ComponentStory<typeof LinksSection>;

export const Default: LinksSectionStory = () => {
	return <LinksSection />;
};
