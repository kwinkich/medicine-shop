import React from 'react';
import { Link } from 'react-router-dom';

interface ShopCardProps {
	obj: { name: string; _id: number };
}

export const ShopCard: React.FC<ShopCardProps> = ({ obj }) => {
	return (
		<Link to={`/shop/${obj._id}`}>
			<div className='py-3 px-6 max-w-44 text-center border-2 border-gray-200'>
				<h4 className='text-2xl text-gray-300'>{obj.name}</h4>
			</div>
		</Link>
	);
};
