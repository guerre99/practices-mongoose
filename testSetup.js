const mongoose = require('mongoose');

const Intake = require('./src/intake');
const Campus = require('./src/campus');

const db = 'practice-mongodb';
const url = 'mongodb://127.0.0.1:27017/';

const main = async () => await mongoose.connect(url + db);

main().catch(console.err);

beforeEach(async () => {
	await Intake.deleteMany({});
	await Campus.deleteMany({});
	// await Intake.collection.dropIndexes();
});
afterEach(async () => {
	await Intake.deleteMany({});
	await Campus.deleteMany({});
});
