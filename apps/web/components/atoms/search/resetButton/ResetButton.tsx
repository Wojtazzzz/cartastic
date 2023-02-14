import { Button } from 'components/atoms/button/Button';
import { useSearchFormContext } from 'components/contexts/SearchFormContext';

export const ResetButton = () => {
	const { reset } = useSearchFormContext();

	return (
		<Button
			type="reset"
			label="Reset"
			variant="outline"
			className="w-[130px] md:w-[150px] text-sm md:text-base"
			onClick={reset}
		>
			Reset
		</Button>
	);
};
