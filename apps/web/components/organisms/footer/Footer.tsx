import { Copyrights } from 'components/atoms/footer/copyrights/Copyrights';
import { LinksSection } from 'components/molecules/footer/linksSection/LinksSection';
import { InfoSection } from 'components/molecules/footer/infoSection/InfoSection';
import { ContactSection } from 'components/molecules/footer/contactSection/ContactSection';

export const Footer = () => {
	return (
		<footer className="w-full max-w-[1700px] mt-12 mx-auto">
			<div className="flex flex-col lg:flex-row justify-between gap-5 mt-8 mx-auto py-2 md:py-4 px-3 md:px-6 lg:px-10">
				<InfoSection />
				<LinksSection />
				<ContactSection />
			</div>

			<Copyrights />
		</footer>
	);
};
