import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/renderWithProviders';
import { Heading } from './Heading';

describe('Heading component', () => {
	it('has correct text', () => {
		renderWithProviders(<Heading tag="h1">Test Heading</Heading>);

		const text = screen.getByText('Test Heading');

		expect(text).toBeInTheDocument();
	});

	it('has correct accessible name', () => {
		renderWithProviders(<Heading tag="h1">Test Heading</Heading>);

		const text = screen.getByText('Test Heading');

		expect(text).toHaveAccessibleName('Test Heading');
	});

	it('render as invisible', () => {
		renderWithProviders(
			<Heading tag="h1" invisible>
				Test Heading
			</Heading>
		);

		const text = screen.getByText('Test Heading');

		expect(text).toHaveClass('absolute -top-[99999px] -left-[99999px]');
	});

	it('render as h1', () => {
		renderWithProviders(<Heading tag="h1">Test Heading</Heading>);

		const text = screen.getByText('Test Heading');

		expect(text).toContainHTML('<h1 class="">Test Heading</h1>');
	});

	it('render as h2', () => {
		renderWithProviders(<Heading tag="h2">Test Heading</Heading>);

		const text = screen.getByText('Test Heading');

		expect(text).toContainHTML('<h2 class="">Test Heading</h2>');
	});

	it('render as h3', () => {
		renderWithProviders(<Heading tag="h3">Test Heading</Heading>);

		const text = screen.getByText('Test Heading');

		expect(text).toContainHTML('<h3 class="">Test Heading</h3>');
	});

	it('render as h4', () => {
		renderWithProviders(<Heading tag="h4">Test Heading</Heading>);

		const text = screen.getByText('Test Heading');

		expect(text).toContainHTML('<h4 class="">Test Heading</h4>');
	});

	it('render as h5', () => {
		renderWithProviders(<Heading tag="h5">Test Heading</Heading>);

		const text = screen.getByText('Test Heading');

		expect(text).toContainHTML('<h5 class="">Test Heading</h5>');
	});

	it('render as h6', () => {
		renderWithProviders(<Heading tag="h6">Test Heading</Heading>);

		const text = screen.getByText('Test Heading');

		expect(text).toContainHTML('<h6 class="">Test Heading</h6>');
	});
});
