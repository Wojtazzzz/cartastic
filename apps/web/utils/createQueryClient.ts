import { QueryClient } from '@tanstack/react-query';

export const createQueryClient = () => {
	return new QueryClient({
		logger: {
			log: console.log,
			warn: console.warn,
			error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
		},
		defaultOptions: {
			queries: {
				retry: false,
				staleTime: 3000,
			},
		},
	});
};
