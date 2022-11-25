import { render } from '@testing-library/react';
import { Providers } from 'app/Providers';
import type { ReactElement } from 'react';

export const renderWithProviders = (component: ReactElement) => {
	render(<Providers>{component}</Providers>);
};
