import type { ReactNode } from 'react';
import '../styles/tailwind.css';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html>
			<head>
				<title>NextJS app</title>
			</head>

			<body>{children}</body>
		</html>
	);
}
