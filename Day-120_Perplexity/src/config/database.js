import dns from 'node:dns/promises';  

dns.setServers(['1.1.1.1','8.8.8.8'])

import mongoose from 'mongoose';

async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		
	} catch (error) {
		console.error('Failed to start server:', error.message);
		process.exit(1);
	}
}

console.log('Connected to MongoDB');

export default connectDB;
