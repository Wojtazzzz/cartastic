import { useSearchFormContext } from 'components/contexts/SearchFormContext';
import { Button } from '../button/Button';

export const SearchResetButton = () => {
	const { reset } = useSearchFormContext();

	return (
		<Button
			type="reset"
			title="Reset"
			label="Reset"
			variant="outline"
			className="w-[130px] md:w-[150px] text-sm md:text-base"
			onClick={reset}
		/>
	);
};
