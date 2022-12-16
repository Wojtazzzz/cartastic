import { NavItem } from 'components/atoms/header/navItem/NavItem';
import HeartIcon from 'components/icons/heart.svg';
import SellIcon from 'components/icons/sell.svg';
import UserIcon from 'components/icons/user.svg';

export const Nav = () => {
	return (
		<nav className="flex gap-4 md:gap-6">
			<NavItem href="/shortlist" title="Shortlist" icon={HeartIcon} />
			<NavItem href="/sell" title="Sell own" icon={SellIcon} />
			<NavItem href="/login" title="Log in" icon={UserIcon} />
		</nav>
	);
};
