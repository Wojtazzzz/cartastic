import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContactSection } from './ContactSection';

export default {
	title: 'Footer/molecules/ContactSection',
	component: ContactSection,
} as ComponentMeta<typeof ContactSection>;

type ContactSectionStory = ComponentStory<typeof ContactSection>;

export const Default: ContactSectionStory = () => {
	return <ContactSection />;
};
