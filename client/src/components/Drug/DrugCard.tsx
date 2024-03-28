import axios from 'axios';
import { Button } from '../Button/Button';

interface DrugCardProps {
	obj: { name: string; price: number; quantity: number; _id: number };
}

export const DrugCard: React.FC<DrugCardProps> = ({ obj }) => {
	const addDrugToCart = async () => {
		try {
			const data = await axios.post(
				`http://localhost:5000/api/cart/add/${obj._id}`
			);
			console.log(data.data);
		} catch (err) {
			console.error(err);
		}
	};

	const deleteDrugToCart = async () => {
		try {
			const data = await axios.delete(
				`http://localhost:5000/api/drugs/delete/${obj._id}`
			);
			window.location.reload();
			console.log(data.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='border-2 border-white py-6 px-6 rounded-xl'>
			<div className='flex flex-col gap-y-5 justify-between h-full'>
				<div className='w-80 h-80 bg-dark'></div>
				<div className='flex flex-col gap-y-5'>
					<div className='flex flex-col gap-y-5'>
						<h3 className='text-3xl text-white font-medium'>{obj.name}</h3>
						<h4 className='text-2xl text-white font-medium'>
							Price: ${obj.price}
						</h4>
						<p className='text-xl text-white font-medium'>
							Quantity: {obj.quantity}
						</p>
					</div>
					<Button click={addDrugToCart}>Buy</Button>
					<Button isDanger={true} click={deleteDrugToCart}>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
};
