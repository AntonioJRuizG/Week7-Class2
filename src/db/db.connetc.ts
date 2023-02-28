import mongoose from 'mongoose';
import { config } from '../config.js';

const { user, password, cluster, dbName } = config;

export const dbConnect = () => {
  // Aconst uri = `mongodb+srv://${user}:${passwd}@${cluster}/${dbName}?retryWrites=true&w=majority`;
  const uri = `mongodb+srv://${user}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

  return mongoose.connect(uri);
};
