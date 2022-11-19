import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

export const renderWithProviders = (component: ReactElement) => {
	const queryClient = new QueryClient();

	render(<QueryClientProvider client={queryClient}>{component}</QueryClientProvider>);
};
