export const Copyrights = () => {
	const year = new Date().getFullYear();

	return (
		<div className="border-t-[1.5px] text-sm border-gray-500/25 px-2 md:px-3 py-3">
			© Copyright {year} Cartastic. All rights reserved.
		</div>
	);
};
