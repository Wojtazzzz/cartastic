import { Button } from 'components/atoms/button/Button';
import { useFormikContext } from 'formik';

export const SearchControls = () => {
	const { handleSubmit, handleReset } = useFormikContext();

	return (
		<div className="flex gap-5">
			<Button
				type="reset"
				title="Reset"
				label="Reset"
				variant="outline"
				className="w-[150px]"
				onClick={handleReset}
			/>

			<Button
				type="submit"
				title="Search"
				label="Search"
				variant="classic"
				className="w-[150px]"
				onClick={handleSubmit}
			/>
		</div>
	);
};
