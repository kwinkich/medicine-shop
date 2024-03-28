import axios from 'axios';
import { useEffect, useState } from 'react';
import { Shop } from '../../../types/Shop';
import { ShopCard } from './ShopCard/ShopCard';

export const ShopBar = () => {
	const [shopsData, setShopsData] = useState<Shop[]>([]);

	useEffect(() => {
		const fetchShopsData = async () => {
			try {
				const response = await axios.get('http://localhost:5000/api/shops');
				setShopsData(response.data);
			} catch (error) {
				console.error('Error fetching shop data:', error);
			}
		};

		fetchShopsData();
	}, []);

	return (
		<div className='custom-height py-6 px-12 border-2 border-gray-200 max-w-max flex flex-col items-center rounded-2xl'>
			<h2 className='text-xl text-white mb-5'>Shops</h2>
			<div className='flex flex-col gap-y-6'>
				{shopsData.length !== 0 ? (
					shopsData.map((shop) => {
						return <ShopCard key={shop.name} obj={shop} />;
					})
				) : (
					<h1 className='tetx-lg text-white text-center'>No shops available</h1>
				)}
			</div>
		</div>
	);
};
