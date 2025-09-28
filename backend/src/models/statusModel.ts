import mongoose from "mongoose";

const statusSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true, trim: true },
		order: Number,
	},
	{ timestamps: true },
);

statusSchema.pre("save", function (next) {
	this.title = this.title.toUpperCase();
	next();
});

statusSchema.pre("save", async function (next) {
	if (this.isNew) {
		const lastStatus = await Status.findOne().sort({ order: -1 }).lean();
		this.order = (lastStatus?.order ?? -1) + 1;
	}
	next();
});

export const Status = mongoose.model("Status", statusSchema);
