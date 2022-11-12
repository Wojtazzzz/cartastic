import { useFormikInput } from 'hooks/useFormikInput';
import type { ChangeEvent } from 'react';
import type { InputNumberName } from './InputNumber';

export const useInputNumber = (name: InputNumberName) => {
	const { value, changeValue } = useFormikInput(name);

	const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
		changeValue(event.target.value);
	};

	return {
		value,
		changeValue: changeInputValue,
	};
};
