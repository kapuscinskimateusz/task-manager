import mongoose, { type InferSchemaType } from "mongoose";
import slugify from "slugify";

const projectSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	slug: { type: String, unique: true },
});

projectSchema.pre("save", async function (next) {
	if (!this.slug) {
		this.slug = slugify(this.name, {
			lower: false,
			strict: true,
		}).toUpperCase();
	}
	next();
});

type ProjectType = InferSchemaType<typeof projectSchema>;

const Project = mongoose.model("Project", projectSchema);

export { type ProjectType, Project };
