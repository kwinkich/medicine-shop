import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Label } from '../components/Label/Label';

export default function AddShopPage() {
	const [shopName, setShopName] = useState<string>('');

	const addShopToDataBase = async () => {
		try {
			const shopResponse = await axios.post(
				'http://localhost:5000/api/shops/create',
				{
					name: shopName,
				}
			);
			console.log(shopResponse.data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleSetShopName = (e: ChangeEvent<HTMLInputElement>) => {
		setShopName(e.target.value);
	};

	return (
		<>
			<Header />
			<section className='flex flex-col'>
				<h1 className='text-4xl text-white font-bold mb-10'>Add Shop</h1>
				<div className='flex flex-col max-w-max gap-y-3'>
					<Label>Enter shop name</Label>
					<Input
						value={shopName}
						onChange={handleSetShopName}
						placeholder='Shop name'
					/>
					<Button click={addShopToDataBase}>Add Shop</Button>
				</div>
			</section>
		</>
	);
}
