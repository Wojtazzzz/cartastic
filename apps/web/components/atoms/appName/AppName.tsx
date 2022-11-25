const variantsStyles = {
	dark: 'text-black',
	light: 'text-white',
} as const;

type AppNameProps = {
	variant: 'dark' | 'light';
};

export const AppName = ({ variant }: AppNameProps) => {
	return (
		<div className="font-bold">
			<span className="text-blue-700">CAR</span>
			<span className={variantsStyles[variant]}>TASTIC</span>
		</div>
	);
};
