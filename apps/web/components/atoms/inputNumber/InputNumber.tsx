'use client';

import clsx from 'clsx';
import type { SearchFormValues } from 'components/organisms/search/Search';
import type { InputHTMLAttributes } from 'react';
import type { ChangeEvent } from 'react';

export type InputNumberName = keyof Pick<SearchFormValues, 'minPrice' | 'maxPrice'>;

type InputNumberProps = {
	name: InputNumberName;
	placeholder: string;
	value: number | undefined;
	className?: string;
	changeValue: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputNumber = ({
	name,
	placeholder,
	value,
	className,
	changeValue,
	...rest
}: InputNumberProps) => {
	return (
		<input
			type="number"
			placeholder={placeholder}
			value={value}
			name={name}
			onChange={changeValue}
			className={clsx(
				'w-[180px] flex justify-between bg-white focus:outline-none placeholder:text-black border-2 border-black uppercase p-3',
				className
			)}
			{...rest}
		/>
	);
};
