'use client';

import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import type { ChangeEvent } from 'react';

type InputNumberProps = {
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
			onChange={changeValue}
			className={clsx(
				'w-[180px] flex justify-between bg-white focus:outline-none placeholder:text-black border-2 border-black uppercase p-3',
				className
			)}
			{...rest}
		/>
	);
};
