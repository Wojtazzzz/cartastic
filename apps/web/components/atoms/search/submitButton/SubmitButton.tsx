import Link from 'next/link';
import { useSearchLink } from './useSearchLink';

export const SubmitButton = () => {
	const link = useSearchLink();

	return (
		<Link
			href={link}
			className="w-[130px] md:w-[150px] flex justify-center items-center text-sm md:text-base text-white font-bold rounded-md bg-blue-600 hover:opacity-90 transition-opacity active:opacity-80 py-2 px-5"
		>
			Search
		</Link>
	);
};
