export const formatPrice = (price: number) => {
	return new Intl.NumberFormat('en-US').format(price);
};
