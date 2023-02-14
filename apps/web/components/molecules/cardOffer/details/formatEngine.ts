export const formatEngine = (capacity: number) => {
	return Math.abs(capacity) > 999
		? `${(Math.sign(capacity) * (Math.abs(capacity) / 1000)).toFixed(1)} l`
		: Math.sign(capacity) * Math.abs(capacity);
};
