import { DISCORD } from 'utils/env';

export const copyDiscordToClipboard = () => {
	const copy = () => {
		navigator.clipboard.writeText(DISCORD);

		alert('Discord name copied!');
	};

	return copy;
};
