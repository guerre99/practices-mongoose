const mongoose = require('mongoose');
const Intake = require('./intake');

const logosDir = 'https://drive.company.com/';

const campusSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	address: {
		countryCode: String,
		postalCode: String,
		city: String,
		location: {
			lat: Number,
			lng: Number,
		},
	},
	campusManager: String,
});

const Campus = mongoose.model('campus', campusSchema);

module.exports = Campus;
