import { Schema, model } from 'mongoose';

const ShopSchema = new Schema({
	name: { type: String, required: true },
	drugs: [{ type: Schema.Types.ObjectId, ref: 'Drug' }],
});

export default model('Shop', ShopSchema);
