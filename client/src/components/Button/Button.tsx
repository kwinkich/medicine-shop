import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	click?: () => void;
	isDanger?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	click,
	isDanger = false,
}) => {
	return (
		<button
			onClick={click}
			className={
				isDanger
					? 'text-lg text-white bg-red-500 py-3 px-9'
					: 'text-lg text-zinc-900 bg-cyan-300 py-3 px-9'
			}
		>
			{children}
		</button>
	);
};
