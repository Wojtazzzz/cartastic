export const formatMiles = (miles: number) => {
	return Math.abs(miles) > 999
		? `${(Math.sign(miles) * (Math.abs(miles) / 1000)).toFixed(1)} k`
		: Math.sign(miles) * Math.abs(miles);
};
