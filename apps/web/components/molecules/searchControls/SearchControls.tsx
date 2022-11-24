'use client';

import { Button } from 'components/atoms/button/Button';
import { Link } from 'components/atoms/link/Link';
import { Text } from 'components/atoms/text/Text';
import { useSearchFormContext } from 'components/contexts/SearchFormContext';
import type { SearchFormValues } from 'components/contexts/SearchFormContext';

const getLink = ({ brand, model }: Pick<SearchFormValues, 'brand' | 'model'>) => {
	if (brand && model) {
		return `/${brand}/${model}`;
	}

	if (brand && !model) {
		return `/${brand}`;
	}

	return '/all';
};

export const SearchControls = () => {
	const { brand, model, reset } = useSearchFormContext();

	const link = getLink({ brand, model });

	return (
		<div className="flex self-center gap-5">
			<Button
				type="reset"
				title="Reset"
				label="Reset"
				variant="outline"
				className="w-[150px]"
				onClick={reset}
			/>

			<Link
				href={link}
				className="w-[150px] text-center rounded-md bg-blue-600 hover:opacity-90 transition-opacity active:opacity-80 py-2 px-5"
			>
				<Text className="text-white font-bold">Search</Text>
			</Link>
		</div>
	);
};
