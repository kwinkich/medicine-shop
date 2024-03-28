import express from 'express';
import mongoose from 'mongoose';
import router from './router/router.js';
import cors from 'cors';

const PORT = process.env.PORT || '5000';
const DB_URL =
	process.env.DB_URL ||
	'mongodb+srv://root:root@cluster0.7g6zgrs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, () => console.log('server started'));
	} catch (e) {
		console.log(e);
	}
}

startApp();
