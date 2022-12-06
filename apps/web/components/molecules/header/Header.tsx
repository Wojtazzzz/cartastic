import { NavItem } from 'components/atoms/navItem/NavItem';
import HeartIcon from 'components/icons/heart.svg';
import SellIcon from 'components/icons/sell.svg';
import UserIcon from 'components/icons/user.svg';
import { AppName } from 'components/atoms/appName/AppName';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 z-30 w-full h-[44px] md:h-[64px] flex justify-between items-center bg-white shadow-md py-2 md:py-4 px-3 md:px-6 lg:px-10">
			<h1 className="text-xl md:text-2xl">
				<Link href="/">
					<AppName variant="dark" />
				</Link>
			</h1>

			<nav className="flex gap-4 md:gap-6">
				<NavItem href="/shortlist" title="Shortlist" icon={HeartIcon} />
				<NavItem href="/sell" title="Sell own" icon={SellIcon} />
				<NavItem href="/login" title="Log in" icon={UserIcon} />
			</nav>
		</header>
	);
};
