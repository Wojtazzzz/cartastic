import type { ReactNode } from 'react';

type InfoSectionContainerProps = {
	children: ReactNode;
};

export const InfoSectionContainer = ({ children }: InfoSectionContainerProps) => {
	return <div className="w-full lg:w-1/3 flex flex-col lg:px-5">{children}</div>;
};
