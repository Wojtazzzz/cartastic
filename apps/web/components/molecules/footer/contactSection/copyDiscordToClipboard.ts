import { DISCORD } from 'utils/env';

export const copyDiscordToClipboard = () => {
	const copy = async () => {
		await navigator.clipboard.writeText(DISCORD);

		alert('Discord name copied!');
	};

	return copy;
};
