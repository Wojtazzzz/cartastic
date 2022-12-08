export const formatMiles = (miles: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'unit',
		unit: 'mile',
	}).format(miles);
};
