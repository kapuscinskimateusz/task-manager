import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	status: {
		type: String,
		enum: ["todo", "in-progress", "done"],
		default: "todo",
	},
	createdAt: { type: Date, default: Date.now },
});

export const Task = mongoose.model("Task", taskSchema);
