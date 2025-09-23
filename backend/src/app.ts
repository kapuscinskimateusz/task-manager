import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

export default app;
