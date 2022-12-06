'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { createQueryClient } from 'utils/createQueryClient';

type ProvidersProps = {
	children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
	const queryClient = createQueryClient();

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
