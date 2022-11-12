import type { SearchFormValues } from 'components/molecules/searchForm/SearchForm';
import { useFormikContext } from 'formik';

export const useFormikInput = (name: keyof SearchFormValues) => {
	const { values, setFieldValue } = useFormikContext<SearchFormValues>();

	const value = values[name];

	const changeValue = (value: string) => {
		setFieldValue(String(name), value);
	};

	return {
		value,
		changeValue,
	};
};
