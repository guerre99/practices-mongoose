const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Todo = require('./todo');

const app = express();

main().catch(console.err);

app.use(morgan('dev'));
app.use(express.json());

app.get('/todo/:id', async (req, res) => {
	const todoId = req.params.id;
});

app.get('/todos', async (req, res) => {});

app.post('/todo', async (req, res) => {
	const todoToCreate = req.body.todo;
});

app.put('/todo/:id', async (req, res) => {});

app.delete('/todo/:id', async (req, res) => {});

async function main() {
	app.listen(9000, () => console.log('server on'));

	const db = 'practice-mongodb';
	const url = 'mongodb://127.0.0.1:27017/';

	await mongoose.connect(url + db);
}
