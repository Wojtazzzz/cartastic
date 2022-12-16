export const formatCount = (price: number) => {
	return new Intl.NumberFormat('en-US').format(price);
};
