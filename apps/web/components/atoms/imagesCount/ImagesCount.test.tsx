import { screen } from '@testing-library/dom';
import { ImagesCount } from './ImagesCount';
import { renderWithProviders } from 'utils/renderWithProviders';

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
