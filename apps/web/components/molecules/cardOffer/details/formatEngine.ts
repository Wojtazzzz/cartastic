export const formatEngine = (capacity: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'unit',
		unit: 'liter',
		maximumFractionDigits: 1,
		minimumFractionDigits: 1,
	}).format(capacity);
};
