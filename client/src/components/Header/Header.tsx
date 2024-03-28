import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div className='flex gap-x-3 mb-10'>
			<p className='text-xl underline text-blue-400'>
				<Link to={`/shop`}>Shop</Link>
			</p>
			<span className='text-xl text-blue-400'>|</span>
			<p className='text-xl underline text-blue-400'>
				<Link to={`/cart`}>Shoping Cart</Link>
			</p>
		</div>
	);
};
