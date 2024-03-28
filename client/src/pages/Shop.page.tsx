import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { DrugCard } from '../components/Drug/DrugCard';
import { Header } from '../components/Header/Header';
import { ShopBar } from '../components/SideBar/ShopBar/ShopBar';
import { Drug } from '../types/Drug';
import { Shop } from '../types/Shop';

export default function ShopPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [shopData, setShopData] = useState<Shop>();
	const [drugsData, setDrugsData] = useState<Drug[]>([]);

	useEffect(() => {
		const fetchShop = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5000/api/shops/${id}`
				);
				setShopData(response.data.shop);
				setDrugsData(response.data.drugs);
			} catch (err) {
				console.error(err);
			}
		};
		fetchShop();
	}, [id]);

	const deleteShop = async () => {
		try {
			const response = await axios.delete(
				`http://localhost:5000/api/shops/delete/${id}`
			);
			console.log(response);
			return navigate('/shop');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<Header />
			<section className='flex'>
				<div>
					<ShopBar />
				</div>
				<section className='ml-20 overflow-y-auto custom-height-drug'>
					{shopData && (
						<div className='flex items-center gap-x-10 mb-10'>
							<h1 className='text-5xl text-white font-semibold'>
								{shopData.name}
							</h1>
							<Button isDanger={true} click={deleteShop}>
								Delete Shop
							</Button>
						</div>
					)}
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
