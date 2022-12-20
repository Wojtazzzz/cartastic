import { useMinPrice } from './useMinPrice';

export const MinPrice = () => {
	const { minPrice, changeMinPrice } = useMinPrice();

	return (
		<input
			type="number"
			aria-label="Min price"
			placeholder="MIN PRICE"
			value={minPrice}
			step="500"
			min="0"
			onChange={changeMinPrice}
			className="w-[150px] md:w-[180px] text-sm md:text-base flex justify-between bg-white focus:outline-none placeholder:text-black border-2 border-black sm:border-l-0 p-2 md:p-3"
		/>
	);
};
