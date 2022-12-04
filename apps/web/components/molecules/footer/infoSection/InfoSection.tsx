import { AppName } from 'components/atoms/appName/AppName';
import { InfoSectionContainer } from 'components/atoms/footer/infoSectionContainer/InfoSectionContainer';

export const InfoSection = () => {
	return (
		<InfoSectionContainer>
			<AppName variant="dark" />

			<span>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
				doloremque laudantium, totam rem aperiam.
			</span>

			<span>
				Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
				sunt explicabo.
			</span>
		</InfoSectionContainer>
	);
};
