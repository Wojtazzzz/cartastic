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
import { SearchFormValues } from 'components/molecules/searchForm/SearchForm';
import { useFormikInput } from 'hooks/useFormikInput';
import clsx from 'clsx';

export type InputSelectName = keyof Pick<SearchFormValues, 'brand' | 'model'>;

type InputSelectProps = {
	name: InputSelectName;
	placeholder: string;
	className?: string;
	options: {
		value: string;
		name: string;
	}[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export const InputSelect = ({
	name,
	placeholder,
	options,
	className = '',
	...rest
}: InputSelectProps) => {
	const { value, changeValue } = useFormikInput(name);

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
					<ScrollUpButton className="">I</ScrollUpButton>

					<Viewport className="bg-white shadow-md p-2">
						{options.map(({ value, name }, index) => (
							<Item
								key={index}
								className="flex justify-between items-center cursor-pointer hover:outline-none hover:bg-gray-100 p-2"
								value={value}
							>
								<ItemText>{name}</ItemText>
								<ItemIndicator className="">
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
