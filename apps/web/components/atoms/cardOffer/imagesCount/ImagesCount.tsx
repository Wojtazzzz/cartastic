import PhotoIcon from 'components/icons/photo-icon.svg';
import Image from 'next/image';

type ImagesCountProps = {
	count: number;
};

export const ImagesCount = ({ count }: ImagesCountProps) => {
	return (
		<div className="w-fit flex gap-1 bg-gray-700 rounded-xl opacity-[0.65] absolute top-2 right-2 px-1.5 py-[2px]">
			<Image width="11" height="11" src={PhotoIcon} alt="" />

			<span className="text-xs text-white">{count}</span>
		</div>
	);
};
