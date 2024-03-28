import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { Button } from '../Button/Button';

interface DrugBuyProps {
	obj: {
		name: string;
		price: number;
		quantity: number;
		currentQuantity: number;
		drugId: number;
		_id: number;
	};
	itemId: number;
}

export const DrugBuy: React.FC<DrugBuyProps> = ({ obj, itemId }) => {
	const [currentQuantity, setCurrentQuantity] = useState<number>(
		obj.currentQuantity
	);
	const [priceProduct, setPriceProduct] = useState<number>(
		obj.price * obj.currentQuantity
	);

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const newQuantity = Number(e.target.value);
		setCurrentQuantity(newQuantity);
		await updateQuantity(newQuantity);
	};

	const updateQuantity = async (quantity: number) => {
		try {
			const res = await axios.put(`http://localhost:5000/api/cart/edit`, {
				itemId,
				currentQuantity: quantity,
			});
			setPriceProduct(res.data.price * res.data.currentQuantity);
		} catch (err) {
			console.error(err);
		}
	};

	const deleteDrug = async () => {
		try {
			const response = await axios.delete(
				`http://localhost:5000/api/cart/delete/${obj.drugId}`
			);
			window.location.reload();
			console.log(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='w-full mr-4 border-2 border-white py-6 px-6 rounded-xl'>
			<div className='flex justify-between'>
				<div>
					<img
						className='max-w-[500px]'
						src='https://wwwnc.cdc.gov/travel/images/travel-with-medicine.jpg'
						alt='drug'
					/>
				</div>
				<div className='ml-10 flex flex-col gap-y-3'>
					<h3 className='text-3xl text-white font-semibold'>{obj.name}</h3>
					<p className='text-lg text-gray-300'>Price: ${priceProduct}</p>
					<input
						className='rounded-xl py-4 px-6'
						type='number'
						value={currentQuantity}
						min='1'
						onChange={handleChange}
						max={obj.quantity}
					/>
					<Button isDanger={true} click={deleteDrug}>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
};
