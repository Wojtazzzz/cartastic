'use client';

import {
	Root,
	Trigger,
	Portal,
	Overlay,
	Content,
	Title,
	Description,
	Close,
} from '@radix-ui/react-dialog';
import { Button } from '../../atoms/button/Button';
import { useContactWithSeller } from './useContactWithSeller';

export const ContactWithSeller = () => {
	const { isOpen, open, close } = useContactWithSeller();

	return (
		<Root open={isOpen}>
			<Trigger asChild>
				<Button
					label="Show contact with seller"
					variant="classic"
					className="w-full"
					onClick={open}
				>
					Show contact
				</Button>
			</Trigger>

			<Portal>
				<Overlay
					className="bg-black/20 w-screen h-screen fixed top-0 left-0 z-30"
					onClick={close}
				/>

				<Content className="w-11/12 max-h-[85vh] max-w-md shadow-md fixed top-1/2 left-1/2 z-40 space-y-4 -translate-x-1/2 -translate-y-1/2 bg-white p-5 md:p-6 rounded-md">
					<Title className="text-2xl font-semibold">Contact with seller</Title>

					<Description>
						<ul role="list" className="space-y-1">
							<li className="flex justify-between">
								<span>Email:</span>
								<span>xxx@gmail.com</span>
							</li>
							<li className="flex justify-between">
								<span>Phone:</span>
								<span>123 456 789</span>
							</li>
							<li className="flex justify-between">
								<span>Address:</span>
								<span className="text-opacity-20">
									Skierniewice 13, 75-546 Skierniewice, Poland
								</span>
							</li>
						</ul>
					</Description>

					<div className="w-full flex justify-end">
						<Close asChild>
							<Button label="Close modal" variant="classic" onClick={close}>
								Close
							</Button>
						</Close>
					</div>
				</Content>
			</Portal>
		</Root>
	);
};
