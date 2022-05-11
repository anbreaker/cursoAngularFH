import mongoose, { ConnectOptions } from 'mongoose';
import 'dotenv/config';

const urlDB = process.env.MONGO_URI || '';

export const connectDB = async () => {
  try {
    const mongooseOptions: ConnectOptions = {
      autoIndex: true,
    };

    const db = await mongoose.connect(urlDB, mongooseOptions);

    console.log(`MongoDb Conected on: ${db.connection.host}:${db.connection.port}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);

    process.exit(1);
  }
};
