import clsx from 'clsx';
import { useMaxPrice } from './useMaxPrice';

type MaxPriceProps = {
	className?: string;
};

export const MaxPrice = ({ className }: MaxPriceProps) => {
	const { maxPrice, changeMaxPrice } = useMaxPrice();

	return (
		<input
			type="number"
			aria-label="Max price"
			placeholder="Max price"
			value={maxPrice}
			step="500"
			min="0"
			onChange={changeMaxPrice}
			className={clsx(
				'w-[180px] flex justify-between bg-white focus:outline-none placeholder:text-black border-2 border-black uppercase p-3',
				className
			)}
		/>
	);
};
