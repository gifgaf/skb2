import express from 'express';
import cors from 'cors';
import canonize from './canonize';

const app = express();
app.use(cors());

app.get('/task2C', (req, res) => {
	const result = canonize(req.query.username);
	res.send('@'+ result);	
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});