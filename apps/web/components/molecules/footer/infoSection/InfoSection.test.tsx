import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { InfoSection } from './InfoSection';

describe('InfoSection components', () => {
	it('has app name', () => {
		renderWithProviders(<InfoSection />);

		const appName = screen.getByTestId('app-name');

		expect(appName).toHaveTextContent('CARTASTIC');
	});
});
