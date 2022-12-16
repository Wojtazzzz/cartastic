import { useGetModels } from './useGetModels';
import { useModels } from './useModels';

export const SelectModel = () => {
	const { model, changeModel } = useModels();
	const { data: models } = useGetModels();

	return (
		<div className="relative">
			<select
				aria-label="Model"
				name="model"
				value={model}
				className="w-[150px] md:w-[180px] text-sm md:text-base appearance-none flex justify-between bg-white border-2 border-black sm:border-l-0 uppercase p-2 md:p-3"
				onChange={changeModel}
			>
				<option value="0">MODEL</option>

				{models?.map(({ id, name }) => (
					<option key={id} value={id}>
						{name}
					</option>
				))}
			</select>

			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				<svg
					className="fill-current h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
				</svg>
			</div>
		</div>
	);
};
