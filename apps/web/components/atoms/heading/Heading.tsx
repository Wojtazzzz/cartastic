import clsx from 'clsx';
import type { ReactNode } from 'react';

export type HeadingTag = keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

type HeadingProps = {
	tag: HeadingTag;
	invisible?: boolean;
	className?: string;
	children: ReactNode;
};

export const Heading = ({ tag, invisible = false, className, children, ...rest }: HeadingProps) => {
	const Tag = tag;

	return (
		<Tag
			className={clsx(className, {
				'absolute -top-[99999px] -left-[99999px]': invisible,
			})}
			{...rest}
		>
			{children}
		</Tag>
	);
};
