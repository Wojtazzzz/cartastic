import Image from 'next/image';
import Link from 'next/link';

type NavItemProps = {
	href: string;
	title: string;
	icon: string;
};

export const NavItem = ({ href, title, icon }: NavItemProps) => {
	return (
		<Link href={href} className="group flex gap-2">
			<Image src={icon} width="24" height="24" alt="" />

			<span className="hidden sm:inline group-hover:text-blue-700 transition-colors">
				{title}
			</span>
		</Link>
	);
};
