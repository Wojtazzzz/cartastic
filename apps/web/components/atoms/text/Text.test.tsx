import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/renderWithProviders';
import { Text } from './Text';

describe('Text component', () => {
	it('has correct display value', () => {
		renderWithProviders(<Text>Test text</Text>);

		const text = screen.getByText('Test text');

		expect(text).toBeInTheDocument();
	});

	it('is span by default', () => {
		renderWithProviders(<Text>Test text</Text>);

		const text = screen.getByText('Test text');

		expect(text).toContainHTML('<span>Test text</span>');
	});

	it('is span when pass span as prop', () => {
		renderWithProviders(<Text tag="span">Test text</Text>);

		const text = screen.getByText('Test text');

		expect(text).toContainHTML('<span>Test text</span>');
	});

	it('is small when pass small as prop', () => {
		renderWithProviders(<Text tag="small">Test text</Text>);

		const text = screen.getByText('Test text');

		expect(text).toContainHTML('<small>Test text</small>');
	});

	it('is paragraph when pass p as prop', () => {
		renderWithProviders(<Text tag="p">Test text</Text>);

		const text = screen.getByText('Test text');

		expect(text).toContainHTML('<p>Test text</p>');
	});
});
