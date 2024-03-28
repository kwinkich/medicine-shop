import { Input } from '../../Input/Input';
import { Label } from '../../Label/Label';

export const ShopingBar = () => {
	return (
		<div className='custom-height-shoping  gap-y-6 py-6 px-12 border-2 border-gray-200 max-w-max flex flex-col items-center rounded-2xl'>
			<div className='flex flex-col'>
				<Label>Name</Label>
				<Input placeholder='Name' />
			</div>
			<div className='flex flex-col'>
				<Label>Email</Label>
				<Input placeholder='Email' />
			</div>
			<div className='flex flex-col'>
				<Label>Phone</Label>
				<Input placeholder='Phone' />
			</div>
			<div className='flex flex-col'>
				<Label>Addres</Label>
				<Input placeholder='Addres' />
			</div>
		</div>
	);
};
