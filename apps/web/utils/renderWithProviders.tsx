import { render } from '@testing-library/react';
import { Providers } from 'app/Providers';
import type { ReactNode } from 'react';

export const renderWithProviders = (component: ReactNode) => {
	render(<Providers>{component}</Providers>);
};
