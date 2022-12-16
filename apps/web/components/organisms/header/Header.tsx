import { AppNameLink } from 'components/molecules/header/appNameLink/AppNameLink';
import { Nav } from 'components/molecules/header/nav/Nav';

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 z-30 w-full h-[44px] md:h-[64px] flex justify-between items-center bg-white shadow-md py-2 md:py-4 px-3 md:px-6 lg:px-10">
			<AppNameLink />
			<Nav />
		</header>
	);
};
