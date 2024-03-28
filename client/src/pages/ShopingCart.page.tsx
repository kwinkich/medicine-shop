import axios from 'axios';
import { useEffect, useState } from 'react';
import { DrugBuy } from '../components/DrugBuy/DrugBuy';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { ShopingBar } from '../components/SideBar/ShopingBar/ShopingBar';
import { DrugShop } from '../types/DrugShop';

export default function ShopingCartPage() {
	const [drugsData, setDrugsData] = useState<DrugShop[]>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		const fetchCart = async () => {
			try {
				const drugs = await axios.get('http://localhost:5000/api/cart');
				setDrugsData(drugs.data.drugs);
			} catch (err) {
				console.error(err);
			}
		};
		fetchCart();
	}, []);

	useEffect(() => {
		const calculateTotalPrice = () => {
			const totalPrice = drugsData.reduce((total, drug) => {
				return total + drug.price * drug.currentQuantity;
			}, 0);
			setTotalPrice(totalPrice);
		};
		calculateTotalPrice();
	}, [drugsData]);

	return (
		<>
			<Header />
			<section className='flex'>
				<div className=''>
					<ShopingBar />
				</div>
				<section className='ml-20 overflow-y-auto custom-height-shoping '>
					<div className='flex flex-wrap gap-x-5 gap-y-5'>
						{drugsData.length !== 0 ? (
							drugsData.map((drug) => {
								return <DrugBuy key={drug._id} itemId={drug._id} obj={drug} />;
							})
						) : (
							<h2 className='text-3xl text-white'>Is empty</h2>
						)}
					</div>
				</section>
			</section>
			<Footer total={totalPrice} />
		</>
	);
}
