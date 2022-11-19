import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { createQueryClient } from './createQueryClient';

export const renderWithProviders = (component: ReactElement) => {
	const queryClient = createQueryClient();

	render(<QueryClientProvider client={queryClient}>{component}</QueryClientProvider>);
};
