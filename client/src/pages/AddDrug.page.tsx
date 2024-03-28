import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { InputSelect } from '../components/Input/InputSelect';
import { Label } from '../components/Label/Label';
import { Shop } from '../types/Shop';

export default function AddDrugPage() {
	const [shops, setShops] = useState<Shop[]>([]);
	const [drugName, setDrugName] = useState<string>('');
	const [drugPrice, setDrugPrice] = useState<number>(0);
	const [drugQuantity, setDrugQuantity] = useState<number>(0);
	const [drugShop, setDrugShop] = useState<string>();

	useEffect(() => {
		const fetchShops = async () => {
			try {
				const shops = await axios.get('http://localhost:5000/api/shops');
				setShops(shops.data);
				setDrugShop(shops.data[0]._id);
			} catch (err) {
				console.error(err);
			}
		};

		fetchShops();
	}, []);

	const createDrug = async () => {
		try {
			const response = await axios.post(
				'http://localhost:5000/api/drugs/create',
				{
					name: drugName,
					price: drugPrice,
					shopId: drugShop,
					quantity: drugQuantity,
				}
			);
			setDrugName('');
			setDrugPrice(0);
			setDrugQuantity(0);
			console.log(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<Header />
			<section className='flex flex-col'>
				<h1 className='text-4xl text-white font-bold mb-10'>Add Shop</h1>
				<div className='flex flex-col max-w-max gap-y-4'>
					<div className='flex flex-col max-w-max gap-y-3'>
						<Label>Enter Drug name</Label>
						<Input
							value={drugName}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setDrugName(e.target.value)
							}
							placeholder='Drug name'
						/>
					</div>
					<div className='flex flex-col max-w-max gap-y-3'>
						<Label>Enter Drug price</Label>
						<Input
							value={drugPrice}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setDrugPrice(Number(e.target.value))
							}
							placeholder='Drug price'
						/>
					</div>
					<div className='flex flex-col max-w-max gap-y-3'>
						<Label>Enter Drug quantity</Label>
						<Input
							value={drugQuantity}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setDrugQuantity(Number(e.target.value))
							}
							placeholder='Drug quantity'
						/>
					</div>
					<div className='flex flex-col max-w-max gap-y-3'>
						<Label>Enter Shop</Label>
						<select
							value={drugShop}
							onChange={(e) => setDrugShop(e.target.value.toString())}
							className='py-4 px-6 bg-white'
						>
							{shops.map((shop) => {
								return (
									<InputSelect
										key={shop._id}
										valueId={shop._id}
										valueText={shop.name}
									/>
								);
							})}
						</select>
					</div>
					<Button click={createDrug}>Add Drug</Button>
				</div>
			</section>
		</>
	);
}
