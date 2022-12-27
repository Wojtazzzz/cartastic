import { screen } from '@testing-library/react';
import { NavItem } from './NavItem';
import { renderWithProviders } from 'utils/renderWithProviders';
import HeartIcon from 'components/icons/heart.svg';

describe('NavItem component', () => {
	it('is link with correct path', () => {
		renderWithProviders(<NavItem href="/test" title="Test NavItem" icon={HeartIcon} />);

		const navItem = screen.getByRole('link');

		expect(navItem).toHaveAttribute('href', '/test');
	});

	it('has correct title', () => {
		renderWithProviders(<NavItem href="/test" title="Test NavItem" icon={HeartIcon} />);

		const title = screen.getByText('Test NavItem');

		expect(title).toBeInTheDocument();
	});

	it('render icon when is passed as prop', () => {
		renderWithProviders(<NavItem href="/test" title="Test NavItem" icon={HeartIcon} />);

		const svg = screen.getByRole('img');

		expect(svg).toBeInTheDocument();
	});
});
