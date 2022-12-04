import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/renderWithProviders';
import { InfoSectionContainer } from './InfoSectionContainer';

describe('InfoSectionContainer component', () => {
	it('render correct children', () => {
		renderWithProviders(
			<InfoSectionContainer>
				<span data-testid="content">TEST CONTENT</span>
			</InfoSectionContainer>
		);

		const children = screen.getByTestId('content');

		expect(children).toHaveTextContent('TEST CONTENT');
	});
});
