const DISCORD = 'Wojtazz#8680';

export const copyDiscordToClipboard = () => {
	const copy = () => {
		navigator.clipboard.writeText(DISCORD);
	};

	return copy;
};
