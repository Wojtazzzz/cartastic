import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { Copyrights } from './Copyrights';

describe('Copyrights component', () => {
	it('has correct text', () => {
		const year = new Date().getFullYear();

		const text = `© Copyright ${year} Cartastic. All rights reserved.`;

		renderWithProviders(<Copyrights />);

		const copyrights = screen.getByText(text);

		expect(copyrights).toBeInTheDocument();
	});

	it('generate correct year for copyrights text', () => {
		jest.useFakeTimers();
		jest.setSystemTime(new Date('1997-01-01'));

		const text = `© Copyright 1997 Cartastic. All rights reserved.`;

		renderWithProviders(<Copyrights />);

		const copyrights = screen.getByText(text);

		expect(copyrights).toBeInTheDocument();
	});
});
