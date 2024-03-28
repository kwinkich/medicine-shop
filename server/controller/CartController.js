import CartService from '../service/CartService.js'

class CartController{
  
  async getCart(req,res){
    try{
      const cart = await CartService.getCart();
      res.status(200).json(cart);
    } catch(e){
      res.status(500).json(e.message)
    }
  }

  async addDrug(req,res){
    try{
      const drugId = req.params.id;
      const cart = await CartService.addDrug(drugId);
      res.status(200).json(cart);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async deleteDrug(req, res){
    try{
      const drugId = req.params.id;
      const cart = await CartService.deleteDrug(drugId);
      res.status(200).json(cart);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async editDrug(req, res){
    try{
      const item = await CartService.editDrug(req.body.itemId, req.body.currentQuantity);
      res.status(200).json(item);
    } catch(e){
      res.status(500).json(e.message);
    }
  }
}


export default new CartController();
