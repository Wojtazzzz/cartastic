import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/renderWithProviders';
import { InputNumber } from './InputNumber';

describe('InputNumber component', () => {
	it('display correct value', () => {
		const changeValue = jest.fn();

		renderWithProviders(
			<InputNumber
				aria-label="Min price"
				name="minPrice"
				placeholder="Test placeholder"
				value={127}
				changeValue={changeValue}
			/>
		);

		const input = screen.getByLabelText('Min price');

		expect(input).toHaveValue(127);
	});

	it('has correct accessible name', () => {
		const changeValue = jest.fn();

		renderWithProviders(
			<InputNumber
				aria-label="Min price"
				name="minPrice"
				placeholder="Test placeholder"
				value={0}
				changeValue={changeValue}
			/>
		);

		const input = screen.getByLabelText('Min price');

		expect(input).toHaveAccessibleName('Min price');
	});
});
