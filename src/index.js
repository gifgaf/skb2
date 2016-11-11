import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
 	const enter = req.query;
	const sum = (+enter.a || 0 )+ (+enter.b || 0);
 	res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
 	const enter = req.query;
 	const arr = enter.fullname.split(' ');
 	for (var i = arr.length; i >= 0; i--) {
    if (!arr[i]) arr.splice(i, 1);
}
	const str = arr.join(' ');
	if(!str.match("^[^0-9_/]*$")){
		res.send("Invalid fullname");
	}
	else if(arr.length > 3 || arr.length == 0){
		res.send("Invalid fullname");
	}
	else if(arr.length == 2){
		arr[1]= arr[1].toLowerCase();
		arr[1] = arr[1].replace(arr[1].charAt(0) , arr[1].charAt(0).toUpperCase());
		res.send((arr[1] +' '+ arr[0].charAt(0).toUpperCase() + '.').toString());
	}
	else if(arr.length == 1){
		arr[0]= arr[0].toLowerCase();
		arr[0] = arr[0].replace(arr[0].charAt(0) , arr[0].charAt(0).toUpperCase());
		res.send(arr[0]);
	}
	else{
		arr[2]= arr[2].toLowerCase();
		arr[2] = arr[2].replace(arr[2].charAt(0) , arr[2].charAt(0).toUpperCase());
		res.send((arr[2] +' '+ arr[0].charAt(0).toUpperCase() + '.' + ' ' + arr[1].charAt(0).toUpperCase() + '.').toString());
}
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
