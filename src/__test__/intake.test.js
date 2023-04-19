const Intake = require('../intake');
const mongoose = require('mongoose');

describe('Intake model', () => {
	test('intake date are unique per campus and bootcamp ', async () => {
		expect.assertions(1);

		let startDate = new Date();
		startDate.setHours(0, 0, 0, 0);

		const campus = new mongoose.Types.ObjectId();
		const bootcamp = { mode: 'part', type: 'Full Stack' };
		try {
			await Intake.init();
			const intakes = await Intake.create([
				{
					campus,
					bootcamp,
					startDate,
				},
				{
					campus,
					bootcamp,
					startDate,
				},
			]);
		} catch (e) {
			console.log(e);
			expect(e).toBeTruthy();
		}
	});

	test('intake virtual should get formated intake name', async () => {
		let date = new Date('2023-04-19');
		const bootcamp = { mode: 'part', type: 'Full Stack' };

		const intake = await Intake.create({
			campus: new mongoose.Types.ObjectId(),
			bootcamp,
			startDate: date,
		});

		expect(intake.name).toBe('2023-abr19-full-stack-pt');
	});
});
