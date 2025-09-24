import dotenv from "dotenv";

dotenv.config();

interface Config {
	port: number;
	nodeEnv: string;
	database: string;
}

const config: Config = {
	port: Number(process.env.PORT) || 3000,
	nodeEnv: process.env.NODE_ENV || "development",
	database: process.env.DATABASE?.replace('<db_password>', process.env.DATABASE_PASSWORD || '') || ''
};

export default config;
