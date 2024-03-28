import Shop from '../scheme/Shop.js';
import Drug from '../scheme/Drug.js';
import DrugService from '../service/DrugService.js'


class ShopService {
	async getAll() {
		const shops = await Shop.find();
		return shops;
	}

  async getShop(shopId){
    const shop = await Shop.findById(shopId);
    return shop;
  }

  async getShopDrug(shopId){
    const shop = await Shop.findById(shopId);
    let drugs = [];
    let len = shop.drugs.length;

    for (let i = 0; i < len; i++){
      let drug = await Drug.findById(shop.drugs[i].toString());
      drugs.push(drug);
    }

    return {shop, drugs};
  }

	async createShop(drugShop) {
		const createdShop = await Shop.create(drugShop);
		return createdShop;
	}

	async editShop(editShopId,editShop) {
		const editedShop = await Shop.findByIdAndUpdate(editShopId, editShop, {new: true});
    return editedShop;
	}

  async deleteShop(shopId){
    const shop = await Shop.findById(shopId);
    let drugs = [];
    let len = shop.drugs.length;

    if(len !== 0){
      for (let i = 0; i < len; i++){
        const drug = await Drug.findById(shop.drugs[i]);
        const deletedDrug = await Drug.findByIdAndDelete(drug._id);
      }
      const deletedShop = await Shop.findByIdAndDelete(shopId);
      return deletedShop;
    }

    const deletedShop = await Shop.findByIdAndDelete(shopId);

    return deletedShop;
  }

}

export default new ShopService();
