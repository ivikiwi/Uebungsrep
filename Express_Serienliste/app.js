var express = require('express');
var bodyParse = require('body-parser');
var jsonParser = bodyParse.json();

var app = express();

var series = [
	{
		"name": "Once Upon a Time",
		"seasons": "4"
	},
	{
		"name": "Pretty little liar",
		"seasons": "3"
	}
]

app.get('/', function(req, res) {
	res.status(200).json(series);
});

app.listen(8888);