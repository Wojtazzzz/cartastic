import { screen } from '@testing-library/dom';
import { SingleDetail } from './SingleDetail';
import { renderWithProviders } from 'utils/renderWithProviders';
import FuelIcon from 'components/icons/fuel.svg';

describe('SingleDetail component', () => {
	it('has icon', () => {
		renderWithProviders(<SingleDetail icon={FuelIcon} value="Petrol" label="Fuel type" />);

		const icon = screen.getByRole('img');

		expect(icon).toBeInTheDocument();
	});

	it('has icon with correct alt', () => {
		renderWithProviders(<SingleDetail icon={FuelIcon} value="Petrol" label="Fuel type" />);

		const icon = screen.getByAltText('Fuel type');

		expect(icon).toBeInTheDocument();
	});

	it('has value', () => {
		renderWithProviders(<SingleDetail icon={FuelIcon} value="Petrol" label="Fuel type" />);

		const value = screen.getByText('Petrol');

		expect(value).toBeInTheDocument();
	});
});
