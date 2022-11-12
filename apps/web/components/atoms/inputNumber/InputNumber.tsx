import type { SearchFormValues } from 'components/molecules/searchForm/SearchForm';
import type { InputHTMLAttributes } from 'react';
import { useInputNumber } from './useInputNumber';

export type InputNumberName = keyof Pick<SearchFormValues, 'minPrice' | 'maxPrice'>;

type InputNumberProps = {
	name: InputNumberName;
	placeholder: string;
	className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputNumber = ({ name, placeholder, className, ...rest }: InputNumberProps) => {
	const { value, changeValue } = useInputNumber(name);

	return (
		<input
			type="number"
			placeholder={placeholder}
			value={value}
			name={name}
			onChange={changeValue}
			className={`w-[180px] flex justify-between bg-white focus:outline-none placeholder:text-black border-2 border-black uppercase p-3 ${className}`}
			{...rest}
		/>
	);
};
