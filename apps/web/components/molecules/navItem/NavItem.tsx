import { Link } from 'components/atoms/link/Link';
import { Text } from 'components/atoms/text/Text';
import Image from 'next/image';

type NavItemProps = {
	href: string;
	title: string;
	icon?: string;
};

export const NavItem = ({ href, title, icon }: NavItemProps) => {
	return (
		<Link href={href} className="group">
			<div className="flex gap-2">
				{icon && <Image src={icon} width="24" height="24" alt="" />}

				<Text className="hidden sm:inline group-hover:text-blue-700 transition-colors">
					{title}
				</Text>
			</div>
		</Link>
	);
};
