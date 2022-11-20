import { screen } from '@testing-library/react';
import { BRANDS } from 'utils/mockedBrands';
import { renderWithProviders } from 'utils/renderWithProviders';
import { InputSelect } from './InputSelect';

describe('InputSelect component', () => {
	it('display correct value', () => {
		const changeValue = jest.fn();

		renderWithProviders(
			<InputSelect
				aria-label="Brand"
				name="brand"
				value={1}
				changeValue={changeValue}
				placeholder="Test placeholder"
				options={BRANDS}
			/>
		);

		const input = screen.getByLabelText('Brand');

		expect(input).toHaveTextContent(/BMW/);
	});

	it('has correct accessible name', () => {
		const changeValue = jest.fn();

		renderWithProviders(
			<InputSelect
				aria-label="Brand"
				name="brand"
				value={1}
				changeValue={changeValue}
				placeholder="Test placeholder"
				options={BRANDS}
			/>
		);

		const input = screen.getByLabelText('Brand');

		expect(input).toHaveAccessibleName('Brand');
	});
});
