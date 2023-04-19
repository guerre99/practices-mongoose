const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: String,
		status: {
			type: String,
			required: true,
			default: 'Active',
			enum: ['Archived', 'Trash', 'Active'],
		},
		dueOn: Date,
	},
	{ timestamps: true }
);

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
