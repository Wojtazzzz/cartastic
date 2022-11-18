export const fetchData = async <T>(url: string) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response.json() as Promise<T>;
};
