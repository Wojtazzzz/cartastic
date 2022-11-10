import { Link } from '../../atoms/link/Link';
import { Text } from '../../atoms/text/Text';

const variantsStyles = {
	dark: 'text-black',
	light: 'text-white',
} as const;

type AppNameProps = {
	variant: 'dark' | 'light';
};

export const AppName = ({ variant }: AppNameProps) => {
	return (
		<Link href="/">
			<div className="font-bold">
				<Text className="text-blue-700">CAR</Text>
				<Text className={variantsStyles[variant]}>TASTIC</Text>
			</div>
		</Link>
	);
};
