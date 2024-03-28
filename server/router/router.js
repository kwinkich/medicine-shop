import { Router } from 'express';
import DrugController from '../controller/DrugController.js';
import ShopController from '../controller/ShopController.js';
import CartController from '../controller/CartController.js';

const router = new Router();

router.get('/drugs', DrugController.getAll);
router.post('/drugs/create', DrugController.createDrug);
router.put('/drugs/edit', DrugController.editDrug);
router.delete('/drugs/delete/:id', DrugController.deleteDrug);

router.get('/shops', ShopController.getAll);
router.get('/shops/:id', ShopController.getShopDrug);
router.post('/shops/create', ShopController.createShop);
router.put('/shops/edit', ShopController.editShop);
router.delete('/shops/delete/:id', ShopController.deleteShop);

router.get('/cart', CartController.getCart);
router.post('/cart/add/:id', CartController.addDrug);
router.put('/cart/edit', CartController.editDrug);
router.delete('/cart/delete/:id', CartController.deleteDrug);

export default router;
