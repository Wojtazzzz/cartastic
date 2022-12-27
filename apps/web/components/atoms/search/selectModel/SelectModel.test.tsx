import { screen } from '@testing-library/dom';
import { SelectModel } from './SelectModel';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('SelectModel component', () => {
	it('has correct default value', () => {
		renderWithProviders(
			<SearchFormContextProvider>
				<SelectModel />
			</SearchFormContextProvider>
		);

		const input = screen.getByLabelText('Model');

		expect(input).toHaveTextContent('MODEL');
		expect(input).toHaveValue('0');
	});
});
