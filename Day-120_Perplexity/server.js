import 'dotenv/config';

import app from './src/app.js';
import connectDB from './src/config/database.js';

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
	await connectDB();

}

startServer();

app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
