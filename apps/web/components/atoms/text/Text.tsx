import type { HtmlHTMLAttributes, ReactNode } from 'react';

export type TextTag = keyof Pick<JSX.IntrinsicElements, 'p' | 'span' | 'small'>;

type TextProps = {
	tag?: TextTag;
	children: ReactNode;
} & HtmlHTMLAttributes<HTMLElement>;

export const Text = ({ tag = 'span', children, ...rest }: TextProps) => {
	const Tag = tag;

	return <Tag {...rest}>{children}</Tag>;
};
