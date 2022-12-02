import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { ImagesCount } from './ImagesCount';

describe('ImagesCount component', () => {
	it('display correct count', () => {
		renderWithProviders(<ImagesCount count={20} />);

		const count = screen.getByText('20');

		expect(count).toHaveTextContent('20');
	});

	it('render icon', () => {
		renderWithProviders(<ImagesCount count={20} />);

		const icon = screen.getByRole('img');

		expect(icon).toBeInTheDocument();
	});
});
