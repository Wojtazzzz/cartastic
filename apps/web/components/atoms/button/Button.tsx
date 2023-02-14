'use client';

import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

const variantsStyles = {
	classic: 'bg-blue-600 hover:opacity-90 transition-opacity',
	outline: 'ring-blue-600 ring-2 ring-inset hover:bg-blue-600 transition-all',
} as const;

type ButtonProps = {
	label: string;
	variant: 'classic' | 'outline';
	className?: string;
	onClick: () => void;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ label, variant, className, onClick, children, ...rest }: ButtonProps) => {
	return (
		<button
			aria-label={label}
			className={clsx(
				variantsStyles[variant],
				className,
				'text-white font-medium rounded-md active:opacity-80 py-2 px-5'
			)}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	);
};
