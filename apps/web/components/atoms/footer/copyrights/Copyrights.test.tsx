import { screen } from '@testing-library/dom';
import { APP_NAME } from 'utils/env';
import { renderWithProviders } from 'utils/renderWithProviders';
import { Copyrights } from './Copyrights';

describe('Copyrights component', () => {
	it('has correct text', () => {
		const year = new Date().getFullYear();

		const text = `© Copyright ${year} ${APP_NAME}. All rights reserved.`;

		renderWithProviders(<Copyrights />);

		const copyrights = screen.getByText(text);

		expect(copyrights).toBeInTheDocument();
	});

	it('generate correct year for copyrights text', () => {
		jest.useFakeTimers();
		jest.setSystemTime(new Date('1997-01-01'));

		const text = `© Copyright 1997 ${APP_NAME}. All rights reserved.`;

		renderWithProviders(<Copyrights />);

		const copyrights = screen.getByText(text);

		expect(copyrights).toBeInTheDocument();
	});
});
