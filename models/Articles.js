var mongoose = require("mongoose")

const Schema = mongoose.Schema

const ArticleSchema = new Schema({

	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true,
		defaultValue: Date.now
	}
})

const Articles = mongoose.model("Article", ArticleSchema)

module.exports = Articles