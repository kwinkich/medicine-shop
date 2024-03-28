import Drug from '../scheme/Drug.js';
import Shop from '../scheme/Shop.js';

class DrugService {
	async getAll(morePrice) {
		const drugs = await Drug.find();

    if (morePrice) {
      let drugsFiltered = [];
      drugs.map((drugFilter) => {
        if(drugFilter.price >= morePrice){
          drugsFiltered.push(drugFilter);
        }
      })

      return drugsFiltered;
    }

		return drugs;
	}

	async createDrug(drug) {
		const createdDrug = await Drug.create(drug);
		const shopId = drug.shopId;
		const shopDrug = await Shop.findById(shopId);
		shopDrug.drugs.push(createdDrug._id);
		await shopDrug.save();
		return createdDrug;
	}

	async editDrug(editDrugId, editDrugBody) {
		const previousDrug = await Drug.findById(editDrugId);
		const prevShopId = previousDrug.shopId;

		if (prevShopId.toString() !== editDrugBody.shopId.toString()) {
			const prevShopDrug = await Shop.findById(prevShopId);

			const index = prevShopDrug.drugs.indexOf(editDrugId);
			if (index !== -1) {
				prevShopDrug.drugs.splice(index, 1);
				await prevShopDrug.save();
			}
		}

		const editedDrug = await Drug.findByIdAndUpdate(editDrugId, editDrugBody, {
			new: true,
		});

		if (prevShopId.toString() !== editDrugBody.shopId.toString()) {
			const shopId = editDrugBody.shopId;
			const shopDrug = await Shop.findById(shopId);
			shopDrug.drugs.push(editedDrug._id);
			await shopDrug.save();
		}

		return editedDrug;
	}

  async deleteDrug(drugId){
    const drug = await Drug.findById(drugId);
    const shopId = drug.shopId;

    const shopDrug = await Shop.findById(shopId);
    const index = shopDrug.drugs.indexOf(drugId);
    if(index !== -1){
      shopDrug.drugs.splice(index, 1);
      await shopDrug.save();
    }

    const deleteDrug = await Drug.findByIdAndDelete(drugId);
    return deleteDrug;
  }
}

export default new DrugService();
