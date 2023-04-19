const mongoose = require('mongoose');

const intakeSchema = new mongoose.Schema({
	startDate: { type: Date, required: true },
	campus: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'campus',
		required: true,
	},
	bootcamp: {
		mode: {
			type: String,
			required: true,
			enum: ['full', 'part'],
		},
		type: {
			type: String,
			required: true,
			enum: ['Full Stack', 'Data Science', 'Cloud', 'Marketing', 'UX/UI'],
		},
	},
});

const Intake = mongoose.model('intake', intakeSchema);

module.exports = Intake;
