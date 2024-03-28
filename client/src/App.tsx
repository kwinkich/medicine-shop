import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddDrugPage from './pages/AddDrug.page';
import AddShopPage from './pages/AddShop.page';
import ShopPage from './pages/Shop.page';
import ShopingCartPage from './pages/ShopingCart.page';
import ShopsPage from './pages/Shops.page';

const router = createBrowserRouter([
	{
		path: '/shop',
		element: <ShopsPage />,
	},
	{
		path: '/cart',
		element: <ShopingCartPage />,
	},
	{
		path: '/shop/:id',
		element: <ShopPage />,
	},
	{
		path: '/shop/add',
		element: <AddShopPage />,
	},
	{
		path: '/drug/create',
		element: <AddDrugPage />,
	},
]);
function App() {
	return (
		<>
			<div className='container mx-auto pt-10 h-screen'>
				<RouterProvider router={router} />
			</div>
		</>
	);
}

export default App;
