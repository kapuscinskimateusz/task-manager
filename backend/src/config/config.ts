import dotenv from "dotenv";

dotenv.config();

interface Config {
	port: number;
	nodeEnv: "development" | "production";
	database: string;
}

const config: Config = {
	port: Number(process.env.PORT) || 3000,
	nodeEnv: (process.env.NODE_ENV as Config["nodeEnv"]) || "development",
	database:
		process.env.DATABASE?.replace(
			"<db_password>",
			process.env.DATABASE_PASSWORD || "",
		) || "",
};

export default config;
