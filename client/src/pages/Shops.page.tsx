import axios from 'axios';
import { useEffect, useState } from 'react';
import { DrugCard } from '../components/Drug/DrugCard';
import { Header } from '../components/Header/Header';
import { ShopBar } from '../components/SideBar/ShopBar/ShopBar';
import { Drug } from '../types/Drug';

export default function ShopsPage() {
	const [drugsData, setDrugsData] = useState<Drug[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:5000/api/drugs');
				setDrugsData(response.data);
			} catch (error) {
				console.error('Error fetching drug data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Header />
			<section className='flex'>
				<div>
					<ShopBar />
				</div>
				<section className='ml-20 overflow-y-auto custom-height-drug'>
					<div className='flex flex-wrap gap-x-5 gap-y-5'>
						{drugsData.length !== 0 ? (
							drugsData.map((drug) => {
								return <DrugCard key={drug._id} obj={drug} />;
							})
						) : (
							<h2 className='text-3xl text-white'>Is empty</h2>
						)}
					</div>
				</section>
			</section>
		</>
	);
}
