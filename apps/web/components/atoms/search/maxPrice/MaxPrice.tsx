import { useMaxPrice } from './useMaxPrice';

export const MaxPrice = () => {
	const { maxPrice, changeMaxPrice } = useMaxPrice();

	return (
		<input
			type="number"
			aria-label="Max price"
			placeholder="MAX PRICE"
			value={maxPrice}
			step="500"
			min="0"
			onChange={changeMaxPrice}
			className="w-[150px] md:w-[180px] text-sm md:text-base flex justify-between bg-white focus:outline-none placeholder:text-black border-2 border-black sm:rounded-r-md sm:border-l-0 p-2 md:p-3"
		/>
	);
};
