import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import taskRoutes from "./routes/taskRoutes";
import { AppError } from "./utils/AppError";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", taskRoutes);

app.use((req, _res, next) => {
	next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

app.use(errorHandler);

export default app;
