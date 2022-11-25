import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/renderWithProviders';
import { NavItem } from './NavItem';
import HeartIcon from 'components/icons/heart.svg';

describe('NavItem component', () => {
	it('is link with correct path', () => {
		renderWithProviders(<NavItem href="/test" title="Test NavItem" />);

		const navItem = screen.getByRole('link');

		expect(navItem).toHaveAttribute('href', '/test');
	});

	it('has correct title', () => {
		renderWithProviders(<NavItem href="/test" title="Test NavItem" />);

		const title = screen.getByText('Test NavItem');

		expect(title).toBeInTheDocument();
	});

	it('render icon when is passed as prop', () => {
		renderWithProviders(<NavItem href="/test" title="Test NavItem" icon={HeartIcon} />);

		const svg = screen.getByRole('img');

		expect(svg).toBeInTheDocument();
	});

	it('not render icon when is not passed as prop', () => {
		renderWithProviders(<NavItem href="/test" title="Test NavItem" />);

		const svg = screen.queryByRole('img');

		expect(svg).not.toBeInTheDocument();
	});
});
