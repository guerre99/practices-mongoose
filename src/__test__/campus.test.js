const Intake = require('../intake');
const Campus = require('../campus');

describe('Campus model', () => {
	test('removes intakes when campus is remove', async () => {
		const campus = await Campus.create({ name: 'Sevilla' });

		let date = new Date();
		dateWithoutTimezone = new Date(date.toISOString().slice(0, -1));

		await Intake.create([
			{
				startDate: dateWithoutTimezone,
				campus: campus._id,
				bootcamp: { mode: 'part', type: 'Data Science' },
			},
			{
				startDate: dateWithoutTimezone,
				campus: campus._id,
				bootcamp: { mode: 'full', type: 'Data Science' },
			},
			{
				startDate: dateWithoutTimezone,
				campus: campus._id,
				bootcamp: { mode: 'part', type: 'Full Stack' },
			},
		]);

		await Campus.findOneAndRemove(campus._id);
		const matchedIntakes = await Intake.find({ campus: campus._id }).exec();
		expect(matchedIntakes).toHaveLength(0);
	});
});
