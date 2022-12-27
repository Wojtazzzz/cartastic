// TODO: svgr-webpack
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavItem } from './NavItem';
import HeartIcon from 'components/icons/heart.svg';
import SellIcon from 'components/icons/sell.svg';
import UserIcon from 'components/icons/user.svg';

export default {
	title: 'Header/atoms/NavItem',
	component: NavItem,
} as ComponentMeta<typeof NavItem>;

type NavItemStory = ComponentStory<typeof NavItem>;

export const ShortlistItem: NavItemStory = (props) => {
	return <NavItem {...props} />;
};

ShortlistItem.args = {
	href: '/shortlist',
	title: 'Shortlist',
	icon: HeartIcon,
};

export const SellOwnItem: NavItemStory = (props) => {
	return <NavItem {...props} />;
};

SellOwnItem.args = {
	href: '/sell',
	title: 'Sell own',
	icon: SellIcon,
};

export const LogInItem: NavItemStory = (props) => {
	return <NavItem {...props} />;
};

LogInItem.args = {
	href: '/login',
	title: 'Log in',
	icon: UserIcon,
};
