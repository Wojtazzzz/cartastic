import NextLink from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type LinkProps = {
	href: string;
	children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ href, children, ...rest }: LinkProps) => {
	return (
		<NextLink href={href} {...rest}>
			{children}
		</NextLink>
	);
};
