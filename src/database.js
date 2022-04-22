import { MONGO_URI } from './config';
import mongoose from 'mongoose';

(async () => {
    try {
        const db = await mongoose.connect(MONGO_URI);
        console.log('DB connected to', db.connection.name);
    } catch (error) {
        console.error(error)
    }
})()