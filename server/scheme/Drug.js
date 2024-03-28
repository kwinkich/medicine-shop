import { Schema, model } from 'mongoose';

const DrugSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
  quantity: {type: Number, required: true},
	shopId: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
});

export default model('Drug', DrugSchema);
