import Image from 'next/image';
import photoIconUrl from 'components/icons/photo-icon.svg';
import clsx from 'clsx';

type Position = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

type ImagesCountProps = {
	count: number;
	position: Position;
};

export const ImagesCount = ({ count, position }: ImagesCountProps) => {
	return (
		<div
			className={clsx(
				'w-fit flex gap-1 bg-gray-700 rounded-xl opacity-[0.65] absolute px-1.5 py-[2px]',
				{
					'top-2 left-2': position === 'top-left',
					'top-2 right-2': position === 'top-right',
					'bottom-2 right-2': position === 'bottom-right',
					'bottom-2 left-2': position === 'bottom-left',
				}
			)}
		>
			<Image width="11" height="11" src={photoIconUrl} alt="" />

			<span className="text-xs text-white">{count}</span>
		</div>
	);
};
