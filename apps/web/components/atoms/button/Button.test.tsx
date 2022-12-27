import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { renderWithProviders } from 'utils/renderWithProviders';

describe('Button component', () => {
	const user = userEvent.setup();

	it('has correct title', () => {
		const onClick = jest.fn();

		renderWithProviders(
			<Button title="Test Button" label="Test" variant="classic" onClick={onClick} />
		);

		const button = screen.getByRole('button');

		expect(button).toHaveTextContent('Test Button');
	});

	it('has correct accessible name', () => {
		const onClick = jest.fn();

		renderWithProviders(
			<Button title="Test Button" label="Test" variant="classic" onClick={onClick} />
		);

		const button = screen.getByRole('button');

		expect(button).toHaveAccessibleName('Test');
	});

	it('execute onClick function by click', async () => {
		const onClick = jest.fn();

		renderWithProviders(
			<Button title="Test Button" label="Test" variant="classic" onClick={onClick} />
		);

		const button = screen.getByRole('button');

		await user.click(button);

		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
