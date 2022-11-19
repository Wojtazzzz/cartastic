'use client';

import type { SelectHTMLAttributes } from 'react';
import {
	Portal,
	Content,
	ScrollUpButton,
	Viewport,
	Item,
	ItemText,
	ItemIndicator,
	Root,
	ScrollDownButton,
	Trigger,
	Value,
	Icon,
} from '@radix-ui/react-select';
import Image from 'next/image';
import DotIcon from 'components/icons/dot.svg';
import clsx from 'clsx';
import type { Brand, Model, SearchFormValues } from 'components/organisms/search/Search';

export type InputSelectName = keyof Pick<SearchFormValues, 'brand' | 'model'>;

const getCheckedValue = (value: number | undefined) => {
	return typeof value === 'undefined' ? undefined : String(value);
};

type InputSelectProps = {
	name: InputSelectName;
	placeholder: string;
	value: number | undefined;
	changeValue: (value: number) => void;
	options: undefined | Brand[] | Model[];
	className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const InputSelect = ({
	name,
	placeholder,
	value,
	changeValue,
	options,
	className = '',
	...rest
}: InputSelectProps) => {
	return (
		<Root value={value} onValueChange={changeValue}>
			<Trigger
				name={name}
				className={clsx(
					'w-[180px] flex justify-between bg-white border-2 border-black uppercase p-3',
					className
				)}
				{...rest}
			>
				<Value placeholder={placeholder} />
				<Icon />
			</Trigger>

			<Portal>
				<Content className="relative z-40">
					<ScrollUpButton className="SelectScrollButton">I</ScrollUpButton>

					<Viewport className="bg-white shadow-md p-2">
						{options?.map(({ id, name }) => (
							<Item
								key={id}
								className="flex justify-between items-center cursor-pointer hover:outline-none hover:bg-gray-100 p-2"
								value={id}
							>
								<ItemText>{name}</ItemText>
								<ItemIndicator>
									<Image src={DotIcon} width="16" height="16" alt="" />
								</ItemIndicator>
							</Item>
						))}
					</Viewport>

					<ScrollDownButton className="SelectScrollButton">I</ScrollDownButton>
				</Content>
			</Portal>
		</Root>
	);
};
