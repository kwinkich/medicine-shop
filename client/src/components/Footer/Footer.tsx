import { Button } from '../Button/Button';

export const Footer: React.FC<{ total: number }> = ({ total }) => {
	return (
		<div className='mt-10'>
			<div className='flex items-center justify-end mr-4 gap-x-4'>
				<h2 className='text-2xl text-white'>Total: ${total}</h2>
				<Button>Submit</Button>
			</div>
		</div>
	);
};
