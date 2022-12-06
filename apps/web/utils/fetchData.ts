import { API_URL } from './env';

export const fetchData = async <T>(path: string) => {
	const response = await fetch(API_URL + path);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response.json() as Promise<T>;
};
