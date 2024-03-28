import Cart from '../scheme/Cart.js'
import Drug from '../scheme/Drug.js'

class CartService {

  async getCart(){
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ drugs: [] });
    }

    return cart;
  }

  async addDrug(drugId){
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ drugs: [] });
    }

    const {name, price, quantity} = await Drug.findById(drugId);

    cart.drugs.push({name, drugId, currentQuantity: 1, quantity, price});
    await cart.save();
    return cart;
  }

  async deleteDrug(drugId){
    const cart = await Cart.findOne();
    
    for (let i = 0; i < cart.drugs.length; i++){
      if(cart.drugs[i].drugId.toString() === drugId.toString()){
        cart.drugs.splice(i,1);
        await cart.save();
        
      }
    }

    return cart;
  }

  async editDrug(itemId, currentQuantity){
    const cart = await Cart.findOne();
    let item;
    let length = cart.drugs.length;

    if(length !== 0){
      for (let i = 0; i < length; i++){
        if(cart.drugs[i]._id.toString() === itemId.toString()){
          item = cart.drugs[i];
          item.currentQuantity = currentQuantity;
          await cart.save();
          break;
        }
      }
    }
    return item;
  }
}

export default new CartService();
