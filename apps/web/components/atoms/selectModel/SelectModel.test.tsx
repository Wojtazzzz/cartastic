import { screen } from '@testing-library/dom';
import { SearchFormContextProvider } from 'components/contexts/SearchFormContext';
import { renderWithProviders } from 'utils/renderWithProviders';
import { SelectModel } from './SelectModel';

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
