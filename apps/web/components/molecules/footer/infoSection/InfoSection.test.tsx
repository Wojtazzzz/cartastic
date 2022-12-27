import { screen } from '@testing-library/dom';
import { InfoSection } from './InfoSection';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('InfoSection components', () => {
	it('has app name', () => {
		renderWithProviders(<InfoSection />);

		const appName = screen.getByTestId('app-name');

		expect(appName).toHaveTextContent('CARTASTIC');
	});
});
