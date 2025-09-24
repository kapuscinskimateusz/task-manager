import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'The task must have a title']
	},
	description: String,
	status: {
		type: String,
		enum: {
			values: ['todo', 'in-progress', 'done'],
			message: 'Status is either: todo, in-progress, done'
		},
		default: 'todo'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

export const Task = mongoose.model("Task", taskSchema);