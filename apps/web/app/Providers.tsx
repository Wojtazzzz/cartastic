'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

type ProvidersProps = {
	children: ReactNode;
};

const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
