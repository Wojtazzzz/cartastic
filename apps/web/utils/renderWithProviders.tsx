import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

export const renderWithProviders = (component: ReactElement) => {
	render(component);
};
