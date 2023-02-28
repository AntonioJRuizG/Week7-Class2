import dotenv from 'dotenv';
dotenv.config();

export const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  cluster: process.env.DB_CLUSTER,
  dbName: process.env.DB_NAME,
};

// Amongodb+srv://antoniogar129:<password>@cluster0.mf6vxi4.mongodb.net/?retryWrites=true&w=majority
