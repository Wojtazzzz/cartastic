import clsx from 'clsx';
import { useMinPrice } from './useMinPrice';

type MinPriceProps = {
	className?: string;
};

export const MinPrice = ({ className }: MinPriceProps) => {
	const { minPrice, changeMinPrice } = useMinPrice();

	return (
		<input
			type="number"
			aria-label="Min price"
			placeholder="Min price"
			value={minPrice}
			step="500"
			min="0"
			onChange={changeMinPrice}
			className={clsx(
				'w-[180px] flex justify-between bg-white focus:outline-none placeholder:text-black border-2 border-black uppercase p-3',
				className
			)}
		/>
	);
};
