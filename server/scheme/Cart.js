import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CartSchema = new Schema({
 drugs: [{
    name: {type: String},
    drugId: { type: mongoose.Schema.Types.ObjectId, ref: 'Drug' },
    currentQuantity: { type: Number, default: 1 },
    quantity: {type: Number},
    price: {type: Number}
 }],
});

export default model('Cart', CartSchema);
