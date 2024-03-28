import ShopService from '../service/ShopService.js';

class ShopController {
	async getAll(req, res) {
		try {
			const shops = await ShopService.getAll();
			res.status(200).json(shops);
		} catch (e) {
			res.status(500).json(e.message);
		}
	}

  async getShop(req, res){
    try{
      const shop = await ShopService.getShop(req.params.id);
      res.status(200).json(shop);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async getShopDrug(req, res){
    try{
      const {shop, drugs} = await ShopService.getShopDrug(req.params.id);
      res.status(200).json({shop, drugs});
    } catch(e){
      res.status(500).json(e.message);
    }
  }

	async createShop(req, res) {
		try {
			const drugShop = await ShopService.createShop(req.body);
			res.status(200).json(drugShop);
		} catch (e) {
			res.status(500).json(e.message);
		}
	}

	async editShop(req, res) {
		try {
			const editedShop = await ShopService.editShop(req.body._id, req.body);
			res.status(200).json(editedShop);
		} catch (e) {
			res.status(500).json(e.message);
		}
	}

  async deleteShop(req, res){
    try{
      const deletedShop = await ShopService.deleteShop(req.params.id);
      res.status(200).json(deletedShop);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

}

export default new ShopController();
