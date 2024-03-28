import DrugService from '../service/DrugService.js';

class DrugController {
	async getAll(req, res) {
		try {
      const morePrice = req.query.morePrice; 
			const drugs = await DrugService.getAll(morePrice);

      if(morePrice){
        console.log(morePrice);
      }

			res.status(200).json(drugs);
		} catch (e) {
			res.status(500).json(e.message);
		}
	}

	async createDrug(req, res) {
		try {
			const drug = await DrugService.createDrug(req.body);
			res.status(200).json(drug);
		} catch (e) {
			res.status(500).json(e.message);
		}
	}

	async editDrug(req, res) {
		try {
			const editedDrug = await DrugService.editDrug(req.body._id, req.body);
			res.status(200).json(editedDrug);
		} catch (e) {
			res.status(500).json(e.message);
		}
	}

  async deleteDrug(req,res){
    try{
      const deleteDrug = await DrugService.deleteDrug(req.params.id);
      res.status(200).json(deleteDrug);
    } catch(e){
      res.status(500).json(e.message);
    }
  }
}

export default new DrugController();
