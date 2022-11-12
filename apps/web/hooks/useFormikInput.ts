import type { InputNumberName } from 'components/atoms/inputNumber/InputNumber';
import type { SearchFormValues } from 'components/molecules/searchForm/SearchForm';
import { useFormikContext } from 'formik';

export const useFormikInput = (name: InputNumberName) => {
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
