'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { createQueryClient } from 'utils/createQueryClient';

type ProvidersProps = {
	children: ReactNode;
};

const queryClient = createQueryClient();

export const Providers = ({ children }: ProvidersProps) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
