export const formatNumber = (number: number, unit: string, options?: Intl.NumberFormatOptions) => {
	return new Intl.NumberFormat('en-US', {
		style: 'unit',
		unit,
		...options,
	}).format(number);
};
