import express from 'express';
import canonize from './canonize';

const app = express();
app.get('/', (req, res) => {
	const username =  canonize(req.query.url);
	return res.json({
		url: req.query.url,
		username,
  	});	
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});