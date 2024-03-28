import { ReactNode } from 'react';

export const Label: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <label className='text-lg text-white'>{children}</label>;
};
